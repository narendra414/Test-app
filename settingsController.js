angular.module('memb.controllers.settings',
              ['memb.controllers.settings.addDeviceActivationCode',
               'memb.controllers.settings.applyIBfromMB',
               'memb.controllers.settings.changePin',
               'memb.controllers.settings.changeMobileNumber',
               'memb.controllers.settings.touchId',
               'memb.controllers.settings.promptPay'])

.controller('SettingsResultController', function ($rootScope, $scope, $stateParams, $cordovaTouchID, ActivationService, AccountSummaryService, AppServices, InboxService, LoginService, IdleTimeoutToken, UserService, $window) {
    try {

        var lobjController;
        var secureKeyService;
        var successResultFunction = "";
        var failureResultFunction = "";

        //Preshow
        $scope.$on("$ionicView.beforeEnter", function (scopes, states) {
            try {
                $rootScope.utilities.Log("Controller: SettingsResultController - $ionicView.beforeEnter", "Initiated", LOG_TYPES.DEBUG);
                $rootScope.utilities.genericPreShow();
                $scope.processResultValue = $stateParams.result;
                $scope.processResult = !!parseInt($stateParams.result);
            } catch (e) {
                $rootScope.utilities.globalException(e);
            }
        });

        //Post show
        $scope.$on("$ionicView.enter", function (scopes, states) {
            try {
                $rootScope.utilities.Log("Controller: SettingsResultController - $ionicView.enter", "Initiated", LOG_TYPES.DEBUG);
                var lobjResultScreenUI = $rootScope.utilities.getObjectFromJSONObj(RESULTS_SCREEN_UI, {
                    'value': parseInt($stateParams.type)
                }, true)[0];
                $scope.successResultTitle = $rootScope.utilities.translateContent(lobjResultScreenUI.success_header);
                $scope.successMessage = $rootScope.utilities.translateContent(lobjResultScreenUI.success_message);
                $scope.failureResultTitle = $rootScope.utilities.translateContent(lobjResultScreenUI.failure_header);
                $scope.successButtonText = $rootScope.utilities.translateContent(lobjResultScreenUI.success_button);
                $scope.failureButtonText = $rootScope.utilities.translateContent(lobjResultScreenUI.failure_button);
                $scope.successRedirectionPage = lobjResultScreenUI.success_page_redirection;
                $scope.failureRedirectionPage = lobjResultScreenUI.failure_page_redirection;
                successResultFunction = lobjResultScreenUI.success_result_function;
                failureResultFunction = lobjResultScreenUI.failure_result_function;

                if (lobjResultScreenUI.value == RESULTS_SCREEN_UI.ENABLE_TOUCH.value) {
                    $rootScope.touchIdEnabledOnDevice = true;
                } else if (lobjResultScreenUI.value == RESULTS_SCREEN_UI.DISABLE_TOUCH.value) {
                    $rootScope.touchIdEnabledOnDevice = false;
                } else if (lobjResultScreenUI.value == RESULTS_SCREEN_UI.ACTIVATION_MB_ENABLE_TOUCH.value) {
                    $rootScope.touchIdEnabledOnDevice = true;
                } else if (lobjResultScreenUI.value == RESULTS_SCREEN_UI.ACTIVATION_MB_PROCESS_COMPLETE.value) {
                    if ($scope.processResultValue == "1") {
                        lobjController = this;
                        secureKeyService = "LoginController";
                        LoginService.setControllerSecurityKey(secureKeyService, lobjController);
                    }
                }
                $rootScope.utilities.genericPostShow();
            } catch (e) {
                $rootScope.utilities.globalException(e);
            }
        });

        $scope.gotoSuccessResult = function () {
            if (isValidInput(successResultFunction)) {
                eval(successResultFunction)();
            } else {
                $rootScope.utilities.gotoPage($scope.successRedirectionPage);
            }
        };

        $scope.gotoFailureResult = function () {
            if (isValidInput(failureResultFunction)) {
                eval(failureResultFunction)();
            } else {
                $rootScope.utilities.gotoPage($scope.failureRedirectionPage);
            }
        };

        $scope.loginFromActivation = function () {
            $rootScope.utilities.showLoading();
            $rootScope.utilities.Log("Controller: SettingsResultController - $scope.loginFromActivation", "Initiated", LOG_TYPES.LOG);
            LoginService.login($rootScope.deviceId, ActivationService.getPin(), secureKeyService, lobjController).then(function (data) {
                $rootScope.utilities.Log("Controller: SettingsResultController - $scope.loginFromActivation - Promise then", stringify(data), LOG_TYPES.LOG);

                AppServices.resetAllServices();

                IdleTimeoutToken.start(SESSION_TYPE.POST_LOGIN);
                if (isValidInput(data.bizLoginResp.touchFlag)) {
                    $rootScope.isDeviceActivated = true;
                    $rootScope.touchIdEnabledOnDevice = convertStringToBoolean(data.bizLoginResp.touchFlag);
                    $rootScope.deviceStatus = data.bizLoginResp.deviceStatus;
                }
                UserService.setFullName(data.bizLoginResp.fullName);
                UserService.setFamilyNameTH(data.bizLoginResp.familyNameTH);
                UserService.setGivenNameTH(data.bizLoginResp.givenNameTH);
                UserService.setNamePrefixTH(data.bizLoginResp.namePrefixTH);
                UserService.setPreferredName(data.bizLoginResp.preferredName);
                UserService.setEmailId($rootScope.utilities.returnEmptyStringForInvalidInput(data.bizLoginResp.email));
                UserService.setMobileNumber($rootScope.utilities.returnEmptyStringForInvalidInput(data.bizLoginResp.mobileNumber));
                UserService.setMobileNumberInClear($rootScope.utilities.returnEmptyStringForInvalidInput(data.bizLoginResp.mobileNumberInClear));
                UserService.setUserId($rootScope.deviceId);
                UserService.setChannelStatus(data.bizLoginResp.channelStatus);
                UserService.setLastLoginTimeStamp(data.bizLoginResp.lastLoginTimeStamp);
                UserService.setIsMobileNumberValid(data.bizLoginResp.validMobileFlag);
                UserService.setAccountStatus(data.bizLoginResp.bizASResp.accountStatus);
                UserService.setAccountNumber(data.bizLoginResp.bizASResp.accountNumber);
                UserService.setRemainingFreeOneDayTransfers(data.bizLoginResp.bizASResp.remainingFreeOneDayTransfers);
                UserService.setAccountActivationDate(data.bizLoginResp.bizASResp.firstActivationTS);

                if (data.bizLoginResp.profilePicFlag == "true") {
                    UserService.setIsProfilePictureDefault(true);
                } else {
                    UserService.setIsProfilePictureDefault(false);
                    UserService.setProfilePicture(data.bizLoginResp.profilePic);
                }
                InboxService.setUnreadNotificationsCount($rootScope.utilities.convertToInteger(data.bizLoginResp.unreadNotificationsCount));
                InboxService.setUnreadMessagesCount($rootScope.utilities.convertToInteger(data.bizLoginResp.unreadMessagesInInbox));

                AccountSummaryService.setServiceData(data.bizLoginResp);
                if (window.cordova) {
                    try {
                        if (ionic.Platform.isAndroid()) {
                            if ($rootScope.isFingerprintSetupOnDevice == true) {
                                $rootScope.utilities.gotoPage('activation_enableTouchId');
                            } else {
                                $rootScope.utilities.gotoAccountSummary();
                            }
                        } else {
                            $rootScope.utilities.gotoPage('activation_enableTouchId');
                        }
                    } catch (e) {
                        $rootScope.utilities.gotoAccountSummary();
                    }
                } else {
                    $rootScope.utilities.gotoAccountSummary();
                }
            }).catch(function (failure) {
                $rootScope.utilities.Log("Controller: LoginController - $scope.loginFunction - Promise catch", stringify(failure), LOG_TYPES.LOG);
                //TODO - goto logout page
            });
        };
        $scope.destroy = function () {
            try {
                $scope.processResult = "";
                $scope.processType = "";
            } catch (e) {
                $rootScope.utilities.globalException(e);
            }
        };
    } catch (e) {
        $rootScope.utilities.globalException(e);
    }
});
angular.module('memb.services.utilities', ['memb.services.utilities.appSpecific', 'memb.services.utilities.channelBased', 'memb.services.utilities.helper'])

.factory('UtilitiesService', function ($rootScope, AppSpecificUtilitiesService, ChannelBasedService, HelperService) {
    try {
        console.log('in utilities service:::::::::::');
        return angular.extend({}, AppSpecificUtilitiesService, ChannelBasedService, HelperService);
    } catch (e) {
        logMessage(e);
    }
});

angular.module('memb.mapayConstants', [])

.constant('MEPAY_CONSTANTS', {
    'APP_KEY': 'cafe727c1b3b21c67ffcc51c05e87f9e',
    'APP_SECRET': '2a0e0c67a29b68df5077a6781ba75849',
    'SERVICE_URL': 'https://mepayvit.tau2904.com/authService/100000002/appconfig',
    'HEADERS': {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    'MAX_TRANSACTION_AMT': 50000,
    'MIN_TRANSACTION_AMT': 0.01,
    'MAX_BALANCE_SWEEP_TRANSACTION_AMT': 30000000,
    'AVAILABLE_BALANCE': 4000000,
    'DAILY_TRANSFER_AMT_LIMIT': 500000,
    'MAX_DAILY_TRANSFER_AMT_LIMIT': 1000000,
    'PHN_NUM_VALD': 1000000000,
    'PHN_NUM_LENGTH': 10,
    'CITIZEN_ID_LENGTH': 13,
    'TAX_ID_LENGTH': 13,
    'E_WALLET_ID_LENGTH': 15,
    'PROMPTPAY_TO_MOBILE': 'PPToMobile',
    'PROMPTPAY_TO_CITIZEN_ID': 'PPToCitizenID',
    'PROMPTPAY_TO_TAX_ID': 'PPToTaxID',
    'PROMPTPAY_TO_WALLET_ID': 'PPToEWalletID',
    'BANK_ACCOUNT_NUM_MIN_LENGTH':'10',
    'TRANSFER_FEE': 0.00,
    'zeroValue': 0,
    'datepickerEndDate_Year': 2025,
    'datepickerEndDate_Month': 11,
    'datepickerEndDate_Day': 31,
    'TransfernowAmount': 35,
    'OneDayTransferAmount': 25,
    'TRANSACTION_ID': Math.floor(((Math.random()*100000000))),
    "UNIXTIME_ONE_YEAR" : 86400*364*1000,
    "DATE_FORMAT": "dd-MMM-yyyy",
    "SCHEDULE_TRANSFER_FLAG": false,
    time: [
        { Id: 'Daily', periodtime: 'Daily', checked : 'false' },
        { Id: 'Weekly', periodtime: 'Weekly', checked : 'false'},
        { Id: 'Monthly', periodtime: 'Monthly', checked : 'false' },
        { Id: 'Yearly', periodtime: 'Yearly', checked : 'false' }
        // { Id: '4', periodtime: 'Does not repeat' }
    ],
    endPeriodtime: [
        { Id: 'Never', time: 'Never End Repeat', name: 'Never' },
        { Id: 'Date', time: 'Repeat End Date', name: 'On Date' },
        { Id: 'Times', time: 'End After (times)', name: 'After' }
    ],
    timeDuration: [
        { Id: '1', duration: 'ACCOUNT-ACTIVITY_FILTER-PAGE_TIME-DURATION-1MONTH_LABEL' },
        { Id: '3', duration: 'ACCOUNT-ACTIVITY_FILTER-PAGE_TIME-DURATION-3MONTHS_LABEL' },
        { Id: '6', duration: 'ACCOUNT-ACTIVITY_FILTER-PAGE_TIME-DURATION-6MONTHS_LABEL' },
        { Id: '12', duration: 'ACCOUNT-ACTIVITY_FILTER-PAGE_TIME-DURATION-12MONTHS_LABEL' },
        { Id: '99', duration: 'ACCOUNT-ACTIVITY_FILTER-PAGE_DATE-SELECTION_LABEL' }
    ],
    /* Signup Confirmation Details*/
    confirmDetails: {
        nameTH: 'Thai Characters',
        nameEN: 'Lindsay Gohan',
        regAddr: '444/262 The MET',
        addrLine2: 'South Sathorn Road',
        province: 'Bangkok',
        dist: 'Sathorn',
        subDist: 'Thung Mahamek',
        postalCode: '101010',
        country: 'Thailand',
        email: 'lingo@gmail.com',
        contactAddr: '444/262 The MET',
        addrLine21: 'South Sathorn Road',
        Province1: 'Bangkok',
        dist1: 'Sathorn',
        subDist1: 'Thung Mahamek',
        postalCode1: '101010',
        country1: 'Thailand',
        mobilePh: 'XXX-XXX-1405',
        occupation: 'Business Person',
        companyName: 'TMB Bank PLC',
        addrLine1: '182 Memorial Drive',
        addrLine22: 'Cambridge, MA',
        addrLine3: '02142, USA',
        sourceOfIncome: 'Salary',
        countryOfIncome: 'USA',
        officePh: 'XXX-XXX-1405'
    },
   
    dailylimit: {
        dailylimit: 50000,
        orft: 2000000,
        smart: 2000000,
        promptPay: 500000,
        perTransactionLimit: 500000,
        transferDailyLimit: 30000000
    },

    tmbMesaveAccounts: [
        { status: 'All free account', accountNo: '123 4567 89 1', balanceAmount: '400111' },
        { status: 'No fix account', accountNo: '123 4567 89 1', balanceAmount: '40230' },
    ],
    'settings': [
        { 'id': '1', 'settingName': 'MEMOVE-SETTINGS_LANDING-PAGE_ENABLE-BALANCE-SWEEP_LABEL', onandoff: '' },
        { 'id': '2', 'settingName': 'MEMOVE-SETTINGS_LANDING-PAGE_DAILY-LIMIT_LABEL', onandoff: '' },        
        { 'id': '3', 'settingName': 'MEMOVE-SETTINGS_LANDING-PAGE_PROMPTPAY_LABEL', onandoff: '' },
        { 'id': '4', 'settingName': 'MEMOVE-SETTINGS_LANDING-PAGE_PROFILE_LABEL', onandoff: '' },
        { 'id': '5', 'settingName': 'MEMOVE-SETTINGS_LANDING-PAGE_RE-ACTIVATE-IB_LABEL', onandoff: '' }
        
    ],

    devicesettings: [
        { id: '1', devicesettingName: 'MEMOVE-SETTINGS_LANDING-PAGE_ENABLE-TOUCH-ID_LABEL', onandoff: 'ON', android: true, iOS: true },
        { id: '2', devicesettingName: 'MEMOVE-SETTINGS_LANDING-PAGE_CHANGE-PIN_LABEL', onandoff: '', android: true, iOS: true},
        { id: '3', devicesettingName: 'MEMOVE-SETTINGS_LANDING-PAGE_ADD-DEVICE_LABEL', onandoff: '', android: true, iOS: true },
        { id: '4', devicesettingName: 'MEMOVE-SETTINGS_LANDING-PAGE_CHANGE-COLORS_LABEL', onandoff: '', android: true, iOS: true }
    ],

    devicesettingsNoTouchId: [
        { id: '1', devicesettingName: 'MEMOVE-SETTINGS_LANDING-PAGE_ENABLE-TOUCH-ID_LABEL', onandoff: 'ON', android: false, iOS: false },
        { id: '2', devicesettingName: 'MEMOVE-SETTINGS_LANDING-PAGE_CHANGE-PIN_LABEL', onandoff: '', android: true, iOS: true},
        { id: '3', devicesettingName: 'MEMOVE-SETTINGS_LANDING-PAGE_ADD-DEVICE_LABEL', onandoff: '', android: true, iOS: true },
        { id: '4', devicesettingName: 'MEMOVE-SETTINGS_LANDING-PAGE_CHANGE-COLORS_LABEL', onandoff: '', android: true, iOS: true }
    ],
    contactmehuman: [
        { id: '1', contacttype: 'HELP-ICON_LANDING-PAGE_ME-CALL-CENTER_TITLE', type: 'action-sheet'},
        { id: '2', contacttype: 'HELP-ICON_LANDING-PAGE_ME-WEB-CHAT_TITLE', type: 'function'},
        { id: '3', contacttype: 'HELP-ICON_LANDING-PAGE_ME-PLACE_TITLE', type: 'external-browser'}
    ],

    inboxMenuList: [
        { id: '1', label: 'INBOX_LANDING-PAGE_MESSAGE_TITLE', onandoff: ''},
        { id: '2', label: 'INBOX_LANDING-PAGE_NOTIFICATION_TITLE', onandoff: ''}
    ],

    referencetype: [
        { id: '1', referencetypeName: 'HELP-ICON_LANDING-PAGE_TERMS-AND-CONDITIONS_TITLE'},
        { id: '2', referencetypeName: 'HELP-ICON_LANDING-PAGE_SECURITY_TITLE'},
        { id: '3', referencetypeName: 'HELP-ICON_LANDING-PAGE_PRIVACY_TITLE'}
    ],
    
    balanceSweepSettings: [
        { Id : '1' , settingType: 'Setting - 1' },
        { Id : '2' , settingType: 'Setting - 2' },
        { Id : '3' , settingType: 'ME PAY Balance sweep' },
        { Id : '4' , settingType: 'Setting - 3' },
        { Id : '5' , settingType: 'Setting - 4' }
    ],

    'sweepFrequency': [
        { 'Id': 'DAILY', 'frequencyType': 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SWEEP-FREQUENCY-DAILY_LABEL' },
        { 'Id': 'WEEKLY', 'frequencyType': 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SWEEP-FREQUENCY-WEEKLY_LABEL' },
        { 'Id': 'MONTHLY', 'frequencyType': 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SWEEP-FREQUENCY-MONTHLY_LABEL' }
    ],

    sweepWeekDays: [
        { Id: '1', sweepDay: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-SUN_LABEL' },
        { Id: '2', sweepDay: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MON_LABEL' },
        { Id: '3', sweepDay: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-TUE_LABEL' },
        { Id: '4', sweepDay: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-WED_LABEL' },
        { Id: '5', sweepDay: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-THU_LABEL' },
        { Id: '6', sweepDay: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-FRI_LABEL' },
        { Id: '7', sweepDay: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-SAT_LABEL' }
    ],

    sweepMonthlyPeriod: [
        { Id: '1', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY1_LABEL' },
        { Id: '2', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY2_LABEL' },
        { Id: '3', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY3_LABEL' },
        { Id: '4', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY4_LABEL' },
        { Id: '5', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY5_LABEL' },
        { Id: '6', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY6_LABEL' },
        { Id: '7', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY7_LABEL' },
        { Id: '8', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY8_LABEL' },
        { Id: '9', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY9_LABEL' },
        { Id: '10', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY10_LABEL' },
        { Id: '11', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY11_LABEL' },
        { Id: '12', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY12_LABEL' },
        { Id: '13', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY13_LABEL' },
        { Id: '14', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY14_LABEL' },
        { Id: '15', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY15_LABEL' },
        { Id: '16', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY16_LABEL' },
        { Id: '17', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY17_LABEL' },
        { Id: '18', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY18_LABEL' },
        { Id: '19', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY19_LABEL' },
        { Id: '20', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY20_LABEL' },
        { Id: '21', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY21_LABEL' },
        { Id: '22', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY22_LABEL' },
        { Id: '23', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY23_LABEL' },
        { Id: '24', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY24_LABEL' },
        { Id: '25', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY25_LABEL' },
        { Id: '26', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY26_LABEL' },
        { Id: '27', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY27_LABEL' },
        { Id: '28', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY28_LABEL' },
        { Id: '29', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY29_LABEL' },
        { Id: '30', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY30_LABEL' },
        { Id: '31', month: 'SETTINGS-BALANCE-SWEEP_LANDING-PAGE_SELECT-SWEEP-MONTH-DAY31_LABEL' }
    ],

    'FACTA': [{
            'id': '1 OF 9',
            'question': 'SIGNUP-MEMOVE_FATCA1_QUE1_LABEL',
            'description': 'SIGNUP-MEMOVE_FATCA1_QUE1-DESCRIPTION_LABEL',
            'questionPart': 'SIGNUP-MEMOVE_FATCA_PART1-TITLE-HEADER_LABEL'
        },
        {
            'id': '2 OF 9',
            'question': 'SIGNUP-MEMOVE_FATCA2_QUE2_LABEL',
            'description': 'SIGNUP-MEMOVE_FATCA2_QUE2-DESCRIPTION_LABEL',
            'questionPart': 'SIGNUP-MEMOVE_FATCA_PART1-TITLE-HEADER_LABEL'
        },
        {
            'id': '3 OF 9',
            'question': 'SIGNUP-MEMOVE_FATCA3_QUE3_LABEL',
            'description': 'SIGNUP-MEMOVE_FATCA3_QUE3-DESCRIPTION_LABEL',
            'questionPart': 'SIGNUP-MEMOVE_FATCA_PART1-TITLE-HEADER_LABEL'
        },
        {
            'id': '4 OF 9',
            'question': 'SIGNUP-MEMOVE_FATCA4_QUE4_LABEL'
        },
        {
            'id': '5 OF 9',
            'question': 'SIGNUP-MEMOVE_FATCA5_QUE5_LABEL'
        },
        {
            'id': '6 OF 9',
            'question': 'SIGNUP-MEMOVE_FATCA6_QUE6_LABEL'
        },
        {
            'id': '7 OF 9',
            'question': 'SIGNUP-MEMOVE_FATCA7_QUE7_LABEL'
        },
        {
            'id': '8 OF 9',
            'question': 'SIGNUP-MEMOVE_FATCA8_QUE8_LABEL'
        },
        {
            'id': '9 OF 9',
            'question': 'SIGNUP-MEMOVE_FATCA9_QUE9_LABEL'
        }
    ],

    'PROVINCES_TYPE_KEYWORD': 'provinces',
    'DISTRICTS_TYPE_KEYWORD': 'district',
    'SUBDISTRICTS_TYPE_KEYWORD': 'subDistricts',
    'POSTALS_TYPE_KEYWORD': 'Postal',
    'PROVINCE_CODE': 10,
    'DISTRICT_CODE': 1017,
    'MEPAY_STANDARD_KEYWORD' : 'MEPay',
    'MEMOVE_STANDARD_KEYWORD' : 'ME MOVE',
    'MESAVE_STANDARD_KEYWORD' : 'MESave',
    'MESAVE_FULLCASE_STANDARD_KEYWORD' : 'ME SAVE',
    'CREDIT_STANDARD_KEYWORD' : 'Credit',
    'DEBIT_STANDARD_KEYWORD' : 'Debit',
    'ALL_STANDARD_KEYWORD' : 'All',
    'ONE_MONTH_DURATION_STANDARD_KEYWORD' : 1,
    'DATE_SELECTION_DURATION_STANDARD_KEYWORD' : 99,
    'TRANSFER_TO_ACCOUNT_KEYWORD' : 'TransferToAccount',
    'TRANSFER_TO_PROMPTPAY_KEYWORD' : 'TransferToPromptPay',
    'TRANSFER_TO_MESAVE_KEYWORD' : 'TransferToMeSave',
    'TMB_BANK_CODE': 11,
    'MESAVE_TO_EBA_TRANSFER_KEYWORD' : 'MeSaveToEBA',
    'MESAVE_TO_PROMPTPAY_TRANSFER_KEYWORD' : 'MeSaveToPromptPay',
    'MESAVE_TO_MEPAY_TRANSFER_KEYWORD' : 'MeSaveToMePay',
    'MESAVE_DIRECT_DEBIT_KEYWORD' : 'MeSaveDirectDebit',
    'TO_ACCOUNT_FLOW' : 'account',
    'TO_PROMPTPAY_FLOW' : 'promptpay',
    'TO_MESAVE_FLOW' : 'mesave',
    'NOT_REGISTER' : 'NR',
    'ME_KEYWORD' : 'ME',
    'TMB_KEYWORD' : 'TMB',
    'OTHER_BANK_KEYWORD' : 'OB',
    'RISK_LEVEL_RESTRICT': 4,
    'MOBILE_NUM_TITLE' : 'MEMOVE-TRANSFER_PROMPT-PAY_ENTER-MOBILE-TITLE_LABEL',
    'CITIZENID_TITLE' : 'MEMOVE-TRANSFER_PROMPT-PAY_ENTER-CITIZENID-TITLE_LABEL',
    'TAXID_TITLE' : 'MEMOVE-TRANSFER_PROMPT-PAY_ENTER-TAXID-TITLE_LABEL',
    'WALLETID_TITLE' : 'MEMOVE-TRANSFER_PROMPT-PAY_ENTER-WALLETID_LABEL',
    'SUCCESS_KEYWORD' : 'SUCCESS',
    'INCOMPLETE_KEYWORD' : 'INCOMPLETED',
    'FAIL_KEYWORD' : 'FAIL'


});

var PROMPTPAY_TYPE = {
    PPToMobile: 'PPToMobile',
    PPToCitizenID : 'PPToCitizenID',
    PPToTaxID : 'PPToTaxID',
    PPToEWalletID : 'PPToEWalletID'
};

var MEPAY_ERROR_CODES = {
    INVALID_PP_DETAILS: { code: "S0016" },
    NOTREGISTERED_PP_DETAILS : { code: "S0017" },
    NOT_TRANSFER_OWN_ACCOUNT_PP : { code: "E0017" },

    SUCCESS_CASE : { code: "0" },

    INVALID_SESSION : { code: "E0015" },

    SERVICES_SLEEP_HOURS : { code: "S0015" },

    WRONG_PIN_NO_LOCK : { code: "S0013" },
    WRONG_PIN_LOCK : { code: "S0028" },

    INVALID_MOBILE_NUM : { code: "E0010" },
    INACTIVE_STATUS : { code: "E0030" },
    INCOMPLETE_CASE : { code: "E0047" },
    NO_TMB_EBA : { code: "S0029" },
    RESTRICT_CASE : { code: "E0050"},

    PROMPTPAY_REG_FAIL : { code: "S0033"},
    MANDATORY_FIELDS_MISSED : { code: "E0052"}

};

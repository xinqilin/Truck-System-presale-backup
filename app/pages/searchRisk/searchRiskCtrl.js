(function() {
    'use strict';

    angular.module('BlurAdmin.pages.searchRisk')
        .controller('searchRiskCtrl', searchRiskCtrl);

    /** @ngInject */
    function searchRiskCtrl($scope, $filter) {


        // 將畫面重導致弱點細項畫面
        $scope.clickRow = function(id) {
            location.href = '#/riskAdjust';
        };
        
        // 重新搜尋
        $scope.reSearch = function() {
            $scope.showConclusion = false;
        }



        // 清除所有條件
        $scope.cleanCodition = function() {
            delete $scope.inputKeyword;
            delete $scope.inputStatus;
            delete $scope.inputCreateBeforeDate;
            delete $scope.inputCreateAfterDate;
            delete $scope.inputExpectedBeforeDate;
            delete $scope.inputExpectedAfterDate;
            delete $scope.inputDevice;
            delete $scope.inputIPandPort;
            delete $scope.inputHandler;
            delete $scope.inputPriority;
            $scope.filterCondition.selectedOSandVer = [];
            delete $scope.filterCondition.Keyword;
            delete $scope.filterCondition.CreateBeforeDate;
            delete $scope.filterCondition.CreateAfterDate;
            delete $scope.filterCondition.ExpectedBeforeDate;
            delete $scope.filterCondition.ExpectedAfterDate;

            $scope.isFilterSetting = false;
        }


        // 展示資料
        $scope.riskAll = [{
                id: 1,
                pluginid: 12288,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
                priority: 'Critical',
                newpriority: 'Medium',

                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'Global variable settings[checkbox]:Probe services on every port',
                handler: 'Eddie.Lee',
                createDate: '2017/07/01',
                expectedDate: '2017/09/01',
                updateDate: '2017/03/01'
            },
            {
                id: 2,
                pluginid: 10180,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
                priority: 'Critical',
                newpriority: 'High',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'Ping the remote host[checkbox]:Interpret ICMP unreach from gateway',
                handler: 'Eddie.Lee',
                createDate: '2017/06/15',
                expectedDate: '2017/09/01',
                updateDate: '2017/03/01'
            },
            {
                id: 3,
                pluginid: 10870,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
                priority: 'Critical',
                newpriority: 'Medium',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'Login configurations[checkbox]:Never send SMB credentials in clear text',
                handler: 'Eddie.Lee',
                createDate: '2017/06/15',
                expectedDate: '2017/10/01',
                updateDate: '2017/03/01'
            },
            {
                id: 4,
                pluginid: 17351,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
                priority: 'High',
                status: '待審核',
                FlowType: '風險接受',
                systemType: '網路銀行',
                ticketName: 'Kerberos configuration[entry]:Kerberos KDC Port :',
                handler: 'Eddie.Lee',
                createDate: '2017/05/01',
                expectedDate: '2017/08/01',
                updateDate: '2017/03/01'
            },
            {
                id: 5,
                pluginid: 57029,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
                priority: 'High',
                status: '待審核',
                FlowType: '風險接受',
                systemType: '網路銀行',
                ticketName: 'Patch Management: SCCM Server Settings[entry]:SCCM Username :',
                handler: 'Eddie.Lee',
                createDate: '2017/05/01',
                expectedDate: '2017/08/01',
                updateDate: '2017/03/01'
            },
            {
                id: 6,
                pluginid: 83189,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
                priority: 'High',
                status: '待審核',
                FlowType: '風險接受',
                systemType: '網路銀行',
                ticketName: 'OVAL Windows Compliance Checks[file]:Policy file #3 :',
                handler: 'Eddie.Lee',
                createDate: '2017/05/01',
                expectedDate: '2017/07/01',
                updateDate: '2017/03/01'
            },
            //風險接受
            {
                id: 1,
                pluginid: 12288,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
                priority: 'Critical',
                status: '待審核',
                FlowType: '風險接受',
                systemType: '網路銀行',
                ticketName: 'Global variable settings[checkbox]:Probe services on every port',
                handler: 'Eddie.Lee',
                createDate: '2017/07/01',
                expectedDate: '2017/09/01',
                updateDate: '2017/03/01'
            },
            {
                id: 4,
                pluginid: 17351,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
                priority: 'High',
                newpriority: 'Medium',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'Kerberos configuration[entry]:Kerberos KDC Port :',
                handler: 'Eddie.Lee',
                createDate: '2017/05/01',
                expectedDate: '2017/08/01',
                updateDate: '2017/03/01'
            },
            {
                id: 5,
                pluginid: 57029,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
                priority: 'High',
                newpriority: 'Low',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'Patch Management: SCCM Server Settings[entry]:SCCM Username :',
                handler: 'Eddie.Lee',
                createDate: '2017/05/01',
                expectedDate: '2017/08/01',
                updateDate: '2017/03/01'
            },
            {
                id: 6,
                pluginid: 83189,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
                priority: 'High',
                newpriority: 'Medium',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'OVAL Windows Compliance Checks[file]:Policy file #3 :',
                handler: 'Eddie.Lee',
                createDate: '2017/05/01',
                expectedDate: '2017/07/01',
                updateDate: '2017/03/01'
            },

            //風險調整
            {
                id: 7,
                pluginid: 14273,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
                priority: 'Critical',
                newpriority: 'Medium',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'SSH settings[password]:Additional SSH password (4) :',
                handler: 'Eddie.Lee',
                createDate: '2017/03/01',
                expectedDate: '2017/03/01',
                updateDate: '2017/03/01'
            },
            {
                id: 8,
                pluginid: 66334,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
                priority: 'Critical',
                newpriority: 'Low',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'Patch Report[checkbox]:Display the superseded patches in the report',
                handler: 'Eddie.Lee',
                createDate: '2017/03/01',
                expectedDate: '2017/03/01',
                updateDate: '2017/03/01'
            },
            {
                id: 9,
                pluginid: 62680,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
                priority: 'Critical',
                newpriority: 'High',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'Juniper Junos Compliance Checks[file]:Policy file #5 :',
                handler: 'Eddie.Lee',
                createDate: '2017/03/01',
                expectedDate: '2017/03/01',
                updateDate: '2017/03/01'
            },
            {
                id: 10,
                pluginid: 86349,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
                priority: 'High',
                newpriority: 'Low',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'OpenStack Compliance Checks[file]:Policy file #4 :',
                handler: 'Eddie.Lee',
                createDate: '2017/01/11',
                expectedDate: '2017/02/01',
                updateDate: '2017/03/01'
            },
            {
                id: 11,
                pluginid: 71842,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
                priority: 'High',
                newpriority: 'Medium',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'Brocade FabricOS Compliance Checks[file]:Policy file #1 :',
                handler: 'Eddie.Lee',
                createDate: '2017/01/10',
                expectedDate: '2017/02/01',
                updateDate: '2017/03/01'
            },
            {
                id: 12,
                pluginid: 70469,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
                priority: 'High',
                newpriority: 'Medium',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'FireEye Compliance Checks[file]:Policy file #2 :',
                handler: 'Eddie.Lee',
                createDate: '2016/12/26',
                expectedDate: '2017/02/01',
                updateDate: '2017/03/01'
            },
            {
                id: 13,
                pluginid: 71842,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
                priority: 'High',
                newpriority: 'Medium',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'Brocade FabricOS Compliance Checks[file]:Policy file #1 :',
                handler: 'Eddie.Lee',
                createDate: '2017/01/10',
                expectedDate: '2017/02/01',
                updateDate: '2017/03/01'
            },
            {
                id: 14,
                pluginid: 70469,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
                priority: 'High',
                newpriority: 'Medium',
                status: '待審核',
                FlowType: '風險調整',
                systemType: '網路銀行',
                ticketName: 'FireEye Compliance Checks[file]:Policy file #2 :',
                handler: 'Eddie.Lee',
                createDate: '2016/12/26',
                expectedDate: '2017/02/01',
                updateDate: '2017/03/01'
            },
            //風險接受
            {
                id: 7,
                pluginid: 14273,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
                priority: 'Critical',
                status: '待審核',
                FlowType: '風險接受',
                systemType: '網路銀行',
                ticketName: 'SSH settings[password]:Additional SSH password (4) :',
                handler: 'Eddie.Lee',
                createDate: '2017/03/01',
                expectedDate: '2017/03/01',
                updateDate: '2017/03/01'
            },
            {
                id: 8,
                pluginid: 66334,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
                priority: 'Critical',
                status: '待審核',
                FlowType: '風險接受',
                systemType: '網路銀行',
                ticketName: 'Patch Report[checkbox]:Display the superseded patches in the report',
                handler: 'Eddie.Lee',
                createDate: '2017/03/01',
                expectedDate: '2017/03/01',
                updateDate: '2017/03/01'
            },
            {
                id: 9,
                pluginid: 62680,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
                priority: 'Critical',
                status: '待審核',
                FlowType: '風險接受',
                systemType: '網路銀行',
                ticketName: 'Juniper Junos Compliance Checks[file]:Policy file #5 :',
                handler: 'Eddie.Lee',
                createDate: '2017/03/01',
                expectedDate: '2017/03/01',
                updateDate: '2017/03/01'
            },
            {
                id: 10,
                pluginid: 86349,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
                priority: 'High',
                status: '待審核',
                FlowType: '風險接受',
                systemType: '網路銀行',
                ticketName: 'OpenStack Compliance Checks[file]:Policy file #4 :',
                handler: 'Eddie.Lee',
                createDate: '2017/01/11',
                expectedDate: '2017/02/01',
                updateDate: '2017/03/01'
            },
            {
                id: 11,
                pluginid: 71842,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
                priority: 'High',
                status: '待審核',
                FlowType: '風險接受',
                systemType: '網路銀行',
                ticketName: 'Brocade FabricOS Compliance Checks[file]:Policy file #1 :',
                handler: 'Eddie.Lee',
                createDate: '2017/01/10',
                expectedDate: '2017/02/01',
                updateDate: '2017/03/01'
            },
            {
                id: 12,
                pluginid: 70469,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
                priority: 'High',
                status: '待審核',
                FlowType: '風險接受',
                systemType: '網路銀行',
                ticketName: 'FireEye Compliance Checks[file]:Policy file #2 :',
                handler: 'Eddie.Lee',
                createDate: '2016/12/26',
                expectedDate: '2017/02/01',
                updateDate: '2017/03/01'
            }
        ];

        // setting.html的資料
        $scope.data = {
            department: ['人資部門', '技術部門', '研發部門'],
            device: ['ALM系統資料庫正式機建置需求-AP設計分析十組林宜賢', 'KM正式機使用',
                '動態密碼系統AP Server更改IP網段',
                'DB Audit 專案微軟 SQL Log 集中保存 Server', 'AD與SSO同步用'
            ],
            IPandPort: ['192.168.6.152', '192.168.6.12', '192.168.6.162',
                '192.168.6.64', '10.102.254.136'
            ],
            handler: ['Johnson', 'Leo', 'Will'],
            OSandVer: ['Windows XP', 'Windows Vista', 'Windows 7',
                'Windows 8', 'Windows 10'
            ],
            status: ['待審核', '已結案'],
            FlowType: ['待處理', '待審核', '待複掃'],
            priority: ['Crit', 'High', 'Med', 'Low']
        };
        // 人員資料
        $scope.peopleTableData = [{
            id: 1,
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            email: 'mdo@gmail.com',
            age: '28',
            department: 'Human Resources Department'
        }, {
            id: 2,
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
            email: 'fat@yandex.ru',
            age: '45',
            status: '待審核',
            FlowType: 'primary',
            department: 'Technolog Department'
        }, {
            id: 3,
            firstName: 'Larry',
            lastName: 'Bird',
            username: '@twitter',
            email: 'twitter@outlook.com',
            age: '18',
            department: 'Technolog Department'
        }, {
            id: 4,
            firstName: 'John',
            lastName: 'Snow',
            username: '@snow',
            email: 'snow@gmail.com',
            age: '20',
            department: 'Human Resources Department'
        }, {
            id: 5,
            firstName: 'Jack',
            lastName: 'Sparrow',
            username: '@jack',
            email: 'jack@yandex.ru',
            age: '30',
            department: 'Research and Development Department'
        }];

    }
})();
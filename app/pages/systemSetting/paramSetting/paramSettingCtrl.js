(function() {
    'use strict';

    angular.module('BlurAdmin.pages.systemSetting.paramSetting')
        .controller('paramSettingCtrl', paramSettingCtrl);

    /** @ngInject */
    function paramSettingCtrl($scope, $timeout) {
        $scope.edit=false;
        $scope.paramsearch = function paramsearch(argument) {
            angular.forEach($scope.search, function(value, key) {
                    
            }, log);
        }

        $scope.paramTableData = [{
            code_cate: 'SEVERITY_FINISH_DAYS',
            cate_name: '預計完成天數',
            code: 'SEVERITY_FINISH_DATE_INFO',
            code_name: '預計完成天數-Info',
            code_value: '0'
        }, {
            code_cate: 'SEVERITY_FINISH_DAYS',
            cate_name: '預計完成天數',
            code: 'SEVERITY_FINISH_DATE_LOW',
            code_name: '預計完成天數-Low',
            code_value: '50'
        },{
            code_cate: 'SEVERITY_FINISH_DAYS',
            cate_name: '預計完成天數',
            code: 'SEVERITY_FINISH_DATE_MED',
            code_name: '預計完成天數-Medium',
            code_value: '40'
        },{
            code_cate: 'SEVERITY_FINISH_DAYS',
            cate_name: '預計完成天數',
            code: 'SEVERITY_FINISH_DATE_HIGH',
            code_name: '預計完成天數-High',
            code_value: '30'
        },{
            code_cate: 'SEVERITY_FINISH_DAYS',
            cate_name: '預計完成天數',
            code: 'SEVERITY_FINISH_DATE_CRIT',
            code_name: '預計完成天數-Critical',
            code_value: '20'
        },{
            code_cate: 'SEVERITY_OVERDUE_NOTIFY_DAYS',
            cate_name: '逾期提前通知天數',
            code: 'SEVERITY_OVERDUE_NOTIFY_DAYS_INFO',
            code_name: '逾期提前通知天數-Info',
            code_value: '0'
        }, {
            code_cate: 'SEVERITY_OVERDUE_NOTIFY_DAYS',
            cate_name: '逾期提前通知天數',
            code: 'SEVERITY_OVERDUE_NOTIFY_DAYS_LOW',
            code_name: '逾期提前通知天數-Low',
            code_value: '7'
        }, {
            code_cate: 'SEVERITY_OVERDUE_NOTIFY_DAYS',
            cate_name: '逾期提前通知天數',
            code: 'SEVERITY_OVERDUE_NOTIFY_DAYS_MED',
            code_name: '逾期提前通知天數-Medium',
            code_value: '8'
        },{
            code_cate: 'SEVERITY_OVERDUE_NOTIFY_DAYS',
            cate_name: '逾期提前通知天數',
            code: 'SEVERITY_OVERDUE_NOTIFY_DAYS_HIGH',
            code_name: '逾期提前通知天數-High',
            code_value: '9'
        },{
            code_cate: 'SEVERITY_OVERDUE_NOTIFY_DAYS',
            cate_name: '逾期提前通知天數',
            code: 'SEVERITY_OVERDUE_NOTIFY_DAYS_CRIT',
            code_name: '逾期提前通知天數-Critical',
            code_value: '10'
        }, {
            code_cate: 'MAIL_SERVER_INFO',
            cate_name: '電子信箱伺服器資訊',
            code: 'MAIL_SERVER_INFO_HOST_NAME',
            code_name: '伺服器 IP',
            code_value: ''
        }, {
            code_cate: 'MAIL_SERVER_INFO',
            cate_name: '電子信箱伺服器資訊',
            code: 'MAIL_SERVER_INFO_SMTP_PORT',
            code_name: '伺服器 Port',
            code_value: ''
        }, {
            code_cate: 'MAIL_SERVER_INFO',
            cate_name: '電子信箱伺服器資訊',
            code: 'MAIL_SERVER_INFO_CHARSET',
            code_name: '編碼',
            code_value: ''
        }, {
            code_cate: 'MAIL_SERVER_INFO',
            cate_name: '電子信箱伺服器資訊',
            code: 'MAIL_SERVER_INFO_EMAIL_ACCOUNT',
            code_name: '發送MAIL的帳號',
            code_value: ''
        }, {
            code_cate: 'MAIL_SERVER_INFO',
            cate_name: '電子信箱伺服器資訊',
            code: 'MAIL_SERVER_INFO_EMAIL_PASSWORD',
            code_name: '發送MAIL的密碼',
            code_value: ''
        }, {
            code_cate: 'MAIL_SERVER_INFO',
            cate_name: '電子信箱伺服器資訊',
            code: 'MAIL_SERVER_INFO_SENDER_NAME',
            code_name: '發送MAIL的姓名',
            code_value: ''
        }, {
            code_cate: 'MAIL_SERVER_INFO',
            cate_name: '電子信箱伺服器資訊',
            code: 'MAIL_SERVER_INFO_SENDER_ADDRESS',
            code_name: '發送MAIL的MAIL',
            code_value: ''
        }, {
            code_cate: 'MAIL_SERVER_INFO',
            cate_name: '電子信箱伺服器資訊',
            code: 'MAIL_SERVER_INFO_SSL',
            code_name: 'SSL',
            code_value: ''
        }, {
            code_cate: 'LDAP_AD_INFO',
            cate_name: 'AD認證資訊',
            code: 'LDAP_AD_INFO_INITIAL_CONTEXT_FACTORY',
            code_name: '',
            code_value: ''
        }, {
            code_cate: 'LDAP_AD_INFO',
            cate_name: 'AD認證資訊',
            code: 'LDAP_AD_INFO_PROVIDER_URL',
            code_name: '',
            code_value: ''
        }, {
            code_cate: 'LDAP_AD_INFO',
            cate_name: 'AD認證資訊',
            code: 'LDAP_AD_INFO_SECURITY_AUTHENTICATION',
            code_name: '',
            code_value: ''
        }, {
            code_cate: 'LDAP_AD_INFO',
            cate_name: 'AD認證資訊',
            code: 'LDAP_AD_INFO_SECURITY_PRINCIPAL',
            code_name: '',
            code_value: ''
        }, {
            code_cate: 'LDAP_AD_INFO',
            cate_name: 'AD認證資訊',
            code: 'LDAP_AD_INFO_SECURITY_CREDENTIALS',
            code_name: '',
            code_value: ''
        }, {
            code_cate: 'CAUSE_REASON',
            cate_name: '弱點發生原因下拉選單',
            code: '',
            code_name: '',
            code_value: ''
        }, {
            code_cate: 'TENABLE',
            cate_name: '最後一次取得的 scan result id',
            code: 'LAST_SCAN_RESULT_ID',
            code_name: '',
            code_value: ''
        }];



        //前人的
        $scope.testColumns = [{
            property: 'cate',
            title: 'CATE',
            editable: false
        }, {
            property: 'code',
            title: 'CODE',
            editable: false
        }, {
            property: 'code_name',
            title: 'CODE NAME',
            editable: true
        }, {
            property: 'code_value',
            title: 'CODE VALUE',
            editable: true
        }, {
            property: 'description',
            title: 'DESCRIPTION',
            editable: true
        }];
        $scope.testDatas = [{
            cate: 'STATUS',
            code: 'STATUS_PROCESS1',
            code_name: '處理中',
            code_value: '',
            description: ''
        }, {
            cate: 'KPI_TIME',
            code: 'JUDGE_MAX_TIME1',
            code_name: '審單時限',
            code_value: '',
            description: '單位小時'
        }, {
            cate: 'QUZ_REASON',
            code: 'STATUS_PROCESS2',
            code_name: '待處理',
            code_value: '',
            description: ''
        }, {
            cate: 'ADD_INFO',
            code: 'JUDGE_MAX_TIME2',
            code_name: '審單時限',
            code_value: '',
            description: ''
        }, {
            cate: 'Waiting',
            code: 'JUDGE_MAX_TIME1',
            code_name: '審單時限',
            code_value: '',
            description: ''
        }];
        $scope.test = "測試";
        $scope.metricsTableData = [{
                image: 'app/browsers/chrome.svg',
                browser: 'Google Chrome',
                visits: '10,392',
                isVisitsUp: true,
                purchases: '4,214',
                isPurchasesUp: true,
                percent: '45%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/firefox.svg',
                browser: 'Mozilla Firefox',
                visits: '7,873',
                isVisitsUp: true,
                purchases: '3,031',
                isPurchasesUp: false,
                percent: '28%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/ie.svg',
                browser: 'Internet Explorer',
                visits: '5,890',
                isVisitsUp: false,
                purchases: '2,102',
                isPurchasesUp: false,
                percent: '17%',
                isPercentUp: false
            },
            {
                image: 'app/browsers/safari.svg',
                browser: 'Safari',
                visits: '4,001',
                isVisitsUp: false,
                purchases: '1,001',
                isPurchasesUp: false,
                percent: '14%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/opera.svg',
                browser: 'Opera',
                visits: '1,833',
                isVisitsUp: true,
                purchases: '83',
                isPurchasesUp: true,
                percent: '5%',
                isPercentUp: false
            }
        ];




        function initTable() {
            $scope.columns = $scope.testColumns;
            $scope.totalListSize = $scope.testDatas.length;
            createTableData(0, $scope.pageSize);

            //        $httpService.jsonp(getTableTitleUrl).success(function(data) {
            //          $scope.columns = data.columns;
            //              $scope.totalListSize = data.totalListSize;  //總筆數
            //              
            //              createTableData(0, $scope.pageSize);
            //            });
        }

        function createTableData(startPage, pageSize) {
            $scope.paginationIsDisabled = 'true';
            $scope.datas = $scope.testDatas;
            $scope.startSize = ($scope.currentPage == 1) ? 1 : ($scope.pageSize * ($scope.currentPage - 1)) + 1;
            $scope.endSize = ($scope.pageSize * $scope.currentPage >= $scope.totalListSize) ? $scope.totalListSize : $scope.pageSize * $scope.currentPage;
            createForm();

            //      $http({
            //        method : 'POST', 
            //        url : getTableData, 
            //        data : {
            //          startPage : startPage, 
            //          pageSize : pageSize
            //        }
            //      }).success(function(data){
            //        $scope.datas =data.datas;
            //        // 計算第幾筆到第幾筆
            //        $scope.startSize = ($scope.currentPage == 1) ? 1 :($scope.pageSize * ($scope.currentPage -1))+1;
            //        $scope.endSize = ($scope.pageSize * $scope.currentPage >= $scope.totalListSize ) ? $scope.totalListSize : $scope.pageSize * $scope.currentPage;
            //        loggingService.debug(controllerName, "createTableData $scope.currentPage = " + $scope.currentPage);
            //        createForm();
            //      });
            //        $httpService.jsonp(getTableData, {
            //          dataType : 'json', 
            //        data : {
            //              startPage : startPage, 
            //              pageSize : pageSize
            //        }
            //      }).success(function(data) {
            //            $scope.datas =data.datas;
            //            //計算第幾筆到第幾筆
            //            $scope.startSize = ($scope.currentPage == 1) ? 1 :($scope.pageSize * ($scope.currentPage -1))+1;
            //            $scope.endSize = ($scope.pageSize * $scope.currentPage >= $scope.totalListSize ) ? $scope.totalListSize : $scope.pageSize * $scope.currentPage;
            //            loggingService.debug(controllerName, "createTableData $scope.currentPage = " + $scope.currentPage);
            //            createForm();
            //        }).then(function(){
            //          eventBusService.publish(controllerName, "main.isBlock", {'isBlock': false});
            //        });
        }

        function createForm() {
            $scope.pages = [];
            $scope.pagedUrls = []; //初始化
            $scope.minPageSize = [];
            $scope.maxPageSize = [];
            var defaultdata = $scope.datas;
            var totalSize = $scope.totalListSize; //记录总数
            var maxPage = (totalSize % $scope.pageSize == 0) ? totalSize / $scope.pageSize : (Math.floor(totalSize / $scope.pageSize) + 1) //计算要分的

            $scope.noOfPages = maxPage;

            /*
            //補空白物件
            if($scope.currentPage == maxPage){
              var addObjectSize = ($scope.pageSize * maxPage) -totalSize
              for (var i = 1; i<=addObjectSize; i++){
                  var object = new Object();
                  defaultdata.push(object);
              }
            }
            */
            $scope.pagedUrls = defaultdata.splice(0, $scope.pageSize); //开切分每一頁
        }


    }
})();
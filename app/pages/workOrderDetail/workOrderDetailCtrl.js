(function() {
    'use strict';

    angular.module('BlurAdmin.pages.workOrderDetail')
        .controller('workOrderDetailCtrl', workOrderDetailCtrl);

    /** @ngInject */
    function workOrderDetailCtrl($scope,$uibModal,toastr) {
        //轉派Modal
        $scope.open = function(page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                component: page,
                controller: 'workOrderDetailCtrl',
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });
        };

        //申請展延Modal
        $scope.openExtent = function(page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                component: page,
                controller: 'riskToLongGoalApplyCtrl',
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });
        };

        //取消跳回待頁面
        $scope.backPage = function backPage() {
            location.href = '#/waitDeal';
        };

        $scope.transfer = function transfer() {
          $scope.$dismiss();
          toastr.info("轉派成功");
        };

        $scope.rescan = function rescan() {
            toastr.info("執行複掃");
            location.href = '#/waitRescanDeal';
        };
        $scope.newVulHistory =function newVulHistory() {
            toastr.info("新增說明成功");
        }

        $scope.note = {
            handler:'bank',
            date:new Date('2015/07/25 12:00 12:00'),
            cause:'系統漏洞 1',
            note: 'Microsoft has released a set of patches for Windows XP, 2003, Vista, 2008, 7, and 2008 R2 :\
            Please note this update provides a method of mitigating a class of vulnerabilities rather than fixing any specific vulnerabilities. Additionally, these patches must be used in conjunction with the \'\
            CWDIllegalInDllSearch \' registry setting to have any effect. These protections could be applied in a way that breaks functionality in existing applications. Refer to the Microsoft advisory for more information.'
        }




        $scope.arrays = [{
            id: "10091",
            name: "Mark Otto"
        }, {
            id: "10092",
            name: "Jacob Thornton"
        }, {
            id: "10093",
            name: "Larry Bird"
        }, {
            id: "10094",
            name: "John Snow"
        }, {
            id: "10095",
            name: "Jack Sparrow"
        }]

        /*時間 操作 人員 信件通知 備註*/
        $scope.record = [{
            date: new Date('2015/07/01 12:00'),
            operate: 'New',
            handler: 'system',
            note: '',
        }, {
            date: new Date('2015/07/25 12:00'),
            operate: '新增說明',
            handler: 'bank',
            note: '詳細資料',
        }, {
            date: new Date('2015/07/31 12:00'),
            operate: '延期申請',
            handler: 'bank',
            note: '',
        }, {
            date: new Date('2015/08/04 12:00'),
            operate: '延期申請審核通過',
            handler: 'Alien',
            note: '',
        }, {
            date: new Date('2015/09/01 12:00'),
            operate: '轉派',
            handler: 'Alien',
            note: '由bank轉派給will',
        }, {
            date: new Date('2015/09/09 12:00'),
            operate: '新增說明',
            handler: 'Alien',
            note: '詳細資料',
        }, {
            date: new Date('2015/09/10 12:00'),
            operate: '延期申請',
            handler: 'will',
            note: '',
        }, {
            date: new Date('2015/09/10 12:00'),
            operate: '延期申請審核通過',
            handler: 'Alien',
            note: '',
        }, {
            date: new Date('2015/09/20 12:00'),
            operate: '延期申請',
            handler: 'will',
            note: '',
        }, {
            date: new Date('2015/09/20 12:00'),
            operate: '延期申請審核通過',
            handler: 'Alien',
            note: '',
        }, {
            date: new Date('2015/09/30 12:00'),
            operate: '風險接受申請',
            handler: 'will',
            note: '',
        }, {
            date: new Date('2015/10/15 12:00'),
            operate: '風險接受審核通過',
            handler: 'Alien',
            email: 'bank@gmail.com',
            note: '',
        }, {
            date: new Date('2015/10/16 12:00'),
            operate: '已結束',
            handler: 'Alien',
            email: 'Mega@gmail.com',
            note: '',
        }, {
            date: new Date('2015/10/16 12:00'),
            operate: '已結束',
            handler: 'bank',
            email: 'Alien@gmail.com Mega@gmail.com',
            note: '',
        }];
    }
})();
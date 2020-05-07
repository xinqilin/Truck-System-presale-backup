/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.systemSetting.noticeSetting')
        .controller('noticeSettingCtrl', noticeSettingCtrl);

    /** @ngInject */
    function noticeSettingCtrl($scope) {

        $scope.items = ['AAA', 'BBB']
        $scope.re = function re(id) {
            $scope.items.splice(id, 1)
        }
        $scope.keyup = function keyup(event) {
            if ($scope.text && event.keyCode == 13) {
                if ( $scope.items.indexOf($scope.text)<0) {
                    $scope.items.push($scope.text);
                }else{

                }
                $scope.text = "";
            }
            if (!$scope.text && !($scope.text.length>0) &&event.keyCode == 8  ) {
                $scope.items.splice($scope.items.length - 1, 1)
            }
        }


        $scope.buttons = [{
            class: '弱點名稱',
            url: '<< casename >>'
        }, {
            class: '處理人員',
            url: '<< personnel >>'
        }, {
            class: '預計完成日',
            url: '<< date >>'
        }, {
            class: '弱點層級',
            url: '<< priority >>'
        }, {
            class: '弱點分類',
            url: '<< class >>'
        }, {
            class: '弱點URL',
            url: '<< URL >>'
        }]
        $scope.addemail = function addemail(url) {
            $scope.tinymceModel += url;
        }

        $scope.tinymceModel = '';
        $scope.tinymceOptions = {
            width: "80%",
            menubar: false,
            plugins: "lists",
            content_style: "div {margin: 10px; border: 5px solid red; padding: 3px}",
            toolbar: 'undo redo | bold italic underline | bullist numlist | outdent indent | removeformat '
        };
        $scope.RoleTableData = [{
            num: '1',
            name: '處理人員'
        }, {
            num: '2',
            name: '主管'
        }, {
            num: '3',
            name: '資安組'
        }, {
            num: '4',
            name: '系統管理員'
        }];

        $scope.noticeTableData = [{
            eventName: "新成立通知",
            target: "處理人員/主管/資安組/系統管理員",
        }, {
            eventName: "稽催通知",
            target: "主管",
        }, {
            eventName: "即將逾期通知",
            target: "主管/處理人員",
        }, {
            eventName: "已逾期通知",
            target: "主管/處理人員",
        }, {
            eventName: "待複掃通知",
            target: "主管",
        }]
    }

})();
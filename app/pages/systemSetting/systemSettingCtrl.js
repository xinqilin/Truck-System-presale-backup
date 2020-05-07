(function() {
    'use strict';

    angular.module('BlurAdmin.pages.systemSetting')
        .controller('systemSettingCtrl', systemSettingCtrl);

    /** @ngInject */
    function systemSettingCtrl($scope, $timeout, $uibModal) {
        
        
        $scope.editParam = function(item, $event) {
            console.log(item);
            $scope.rowData = item;
            var modal = document.getElementById('changeParam');
            angular.element(modal).modal();

            $scope.test = true;
        };

        $scope.open = function(page, size,ctrl) {

            //        ModalService.showModal(page);

            $uibModal.open({
                animation: true,
                templateUrl: page,
                component: page,
                controller:ctrl,
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });
        };

    }
})();
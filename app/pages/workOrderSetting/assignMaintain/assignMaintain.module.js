/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.workOrderSetting.assignMaintain', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('workOrderSetting.assignMaintain', {
          url: '/assignMaintain',
          templateUrl: 'app/pages/workOrderSetting/assignMaintain/assignMaintain.html',
          title: '分派維護',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 0,
          },
        });
  }

})();

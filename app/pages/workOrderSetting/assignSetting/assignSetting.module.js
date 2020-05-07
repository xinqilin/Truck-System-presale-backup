/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.workOrderSetting.assignSetting', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('workOrderSetting.assignSetting', {
          url: '/assignSetting',
          templateUrl: 'app/pages/workOrderSetting/assignSetting/assignSetting.html',
          title: '分派設定',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 0,
          },
        });
  }

})();

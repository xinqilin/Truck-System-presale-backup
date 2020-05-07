/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.workOrderSetting', [
	  'BlurAdmin.pages.workOrderSetting.assignSetting',
	  'BlurAdmin.pages.workOrderSetting.assignMaintain'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('workOrderSetting', {
          url: '/workOrderSetting',
          template : '<ui-view></ui-view>',
          controller: 'workOrderSettingCtrl',
          abstract: true,
          title: '弱點設定',
//          sidebarMeta: {
//            icon: 'ion-gear-a',
//            order: 8,
//          },
        });
  }

})();

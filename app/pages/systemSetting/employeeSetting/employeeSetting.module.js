/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.systemSetting.employeeSetting', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('systemSetting.employeeSetting', {
          url: '/employeeSetting',
          title: '角色設定',
          templateUrl: 'app/pages/systemSetting/employeeSetting/employeeSetting.html',
          sidebarMeta: {
              icon: 'ion-gear-a',
              order: 1,
            },
            controller: 'EmployeeSettingCtrl',
        });
  }

})();

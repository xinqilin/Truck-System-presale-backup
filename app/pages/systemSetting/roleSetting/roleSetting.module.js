/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.systemSetting.roleSetting', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('systemSetting.roleSetting', {
          url: '/roleSetting',
          title: '角色權限設定',
          templateUrl: 'app/pages/systemSetting/roleSetting/roleSetting.html',
          sidebarMeta: {
              icon: 'ion-gear-a',
              order: 0,
            },
            controller: 'RoleSettingCtrl',
        });
  }

})();

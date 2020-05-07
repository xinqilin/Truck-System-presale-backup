/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.systemSetting.paramSetting', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('systemSetting.paramSetting', {
          url: '/paramSetting',
          templateUrl: 'app/pages/systemSetting/paramSetting/paramSetting.html',
          title: '參數設定',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 0,
          },
          controller:'paramSettingCtrl'
        });
  }

})();

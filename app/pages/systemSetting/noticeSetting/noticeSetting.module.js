/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.systemSetting.noticeSetting', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('systemSetting.noticeSetting', {
          url: '/noticeSetting',
          templateUrl: 'app/pages/systemSetting/noticeSetting/noticeSetting.html',
          controller: 'noticeSettingCtrl',
          title: '通知設定',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 0,
          },
        });
  }

})();

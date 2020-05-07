/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.systemSetting', [
	  'BlurAdmin.pages.systemSetting.paramSetting',
	  'BlurAdmin.pages.systemSetting.noticeSetting',
	  'BlurAdmin.pages.systemSetting.roleSetting',
	  'BlurAdmin.pages.systemSetting.employeeSetting'
  ])
      .config(routeConfig);

  /** @ngInject */
  // function routeConfig($stateProvider) {
  //   $stateProvider
  //       .state('systemSetting', {
  //         url: '/systemSetting',
  //         template : '<ui-view></ui-view>',
  //         controller: 'systemSettingCtrl',
  //         abstract: true,
  //         title: '系統設定',
  //         sidebarMeta: {
  //           icon: 'ion-gear-a',
  //           order: 7,
  //         },
  //       });
  // }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.waitCheckList',[])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('waitCheckList', {
          url: '/waitCheckList',
          templateUrl: 'app/pages/waitCheckList/waitCheckList.html',
          title: '休假查詢',
          controller: 'waitCheckListCtrl',
          sidebarMeta: {
            icon: 'ion-wrench',
            order: 2,
          },
        });
  }

})();

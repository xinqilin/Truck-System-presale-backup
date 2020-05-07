/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.waitDeal',[])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('waitDeal', {
          url: '/waitDeal',
          templateUrl: 'app/pages/waitDeal/waitDeal.html',
          title: '休假申請',
          controller: 'waitDealCtrl',
          sidebarMeta: {
            icon: 'ion-wrench',
            order: 1,
          },
        });
  }

})();

/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.waitRescanDeal',[])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('waitRescanDeal', {
          url: '/waitRescanDeal',
          templateUrl: 'app/pages/waitRescanDeal/waitRescanDeal.html',
          title: '派車作業',
          controller: 'waitRescanDealCtrl',
          sidebarMeta: {
            icon: 'ion-wrench',
            order: 10,
          },
        });
  }

})();

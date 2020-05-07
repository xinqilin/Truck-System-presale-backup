/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.riskAdjust',[])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('riskAdjust', {
          url: '/riskAdjust',
          templateUrl: 'app/pages/riskAdjust/riskAdjust.html',
          title: '風險調整審核',
//          sidebarMeta: {
//            icon: 'ion-edit',
//            order: 8,
//          },
          controller: 'riskAdjustCtrl',
        });
  }

})();

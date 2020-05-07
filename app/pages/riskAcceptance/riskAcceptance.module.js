/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.riskAcceptance',[])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('riskAcceptance', {
          url: '/riskAcceptance',
          templateUrl: 'app/pages/riskAcceptance/riskAcceptance.html',
          title: '風險接受審核',
//          sidebarMeta: {
//            icon: 'ion-edit',
//            order: 8,
//          },
          controller: 'riskAcceptanceCtrl',
        });
  }

})();

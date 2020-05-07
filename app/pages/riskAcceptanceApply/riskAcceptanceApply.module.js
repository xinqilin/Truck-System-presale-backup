/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.riskAcceptanceApply',[])
//      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('riskAcceptanceApply', {
          url: '/riskAcceptanceApply',
          templateUrl: 'app/pages/riskAcceptanceApply/riskAcceptanceApply.html',
          title: '風險接受申請',
          sidebarMeta: {
            icon: 'ion-edit',
            order: 5,
          },
          controller: 'riskAcceptanceApplyCtrl',
        });
  }

})();

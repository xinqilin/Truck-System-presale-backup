/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.riskToLongGoalApply',[])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('riskToLongGoalApply', {
          url: '/riskToLongGoalApply',
          templateUrl: 'app/pages/riskToLongGoalApply/riskToLongGoalApply.html',
          title: '弱點展延申請',
//          sidebarMeta: {
//            icon: 'ion-edit',
//            order: 5,
//          },
          controller: 'riskToLongGoalApplyCtrl',
        });
  }

})();

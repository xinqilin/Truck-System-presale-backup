/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.riskToLongGoal',[])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('riskToLongGoal', {
          url: '/riskToLongGoal',
          templateUrl: 'app/pages/riskToLongGoal/riskToLongGoal.html',
          title: '弱點展延審核',
//          sidebarMeta: {
//            icon: 'ion-edit',
//            order: 8,
//          },
          controller: 'riskToLongGoalCtrl',
        });
  }

})();

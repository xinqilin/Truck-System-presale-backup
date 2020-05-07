/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.workOrderDetail',[])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('workOrderDetail', {
          url: '/workOrderDetail',
          templateUrl: 'app/pages/workOrderDetail/workOrderDetail.html',
          // title: $scope.id,
          // sidebarMeta: {
          //   icon: 'ion-document-text',
          //   order: 2,
          // },
          hidden :true,
          controller:'workOrderDetailCtrl',
        });
  }

})();

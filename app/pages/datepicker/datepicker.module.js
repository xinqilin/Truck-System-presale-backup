/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.datepicker', [])
      .config(routeConfig);

  /** @ngInject */
 function routeConfig($stateProvider) {
   $stateProvider
       .state('datepicker', {
         url: '/datepicker',
         templateUrl: 'app/pages/datepicker/datepicker.html',
         title: 'Datepicker',
         sidebarMeta: {
           icon: 'fa fa-bar-chart',//'ion-android-home',
           order: 600,
         },
         controller: 'datepickerCtrl',
       });
 }

})();

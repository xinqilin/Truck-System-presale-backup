/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.VTSDashboard', [])
      .config(routeConfig).config(VTSchartpieConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('Dashboard', {
          url: '/Dashboard',
          templateUrl: 'app/pages/VTSDashboard/Dashboard.html',
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'fa fa-bar-chart',//'ion-android-home',
            order: 0,
          },
          controller: 'DashboardPageCtrl',
        });
  }

  function VTSchartpieConfig(ChartJsProvider, baConfigProvider) {
    var layoutColors = baConfigProvider.colors;
    // Configure all charts
    ChartJsProvider.setOptions({
      colours: [ layoutColors.VTSwarning, layoutColors.VTSdanger, layoutColors.VTSinfo],
      scaleFontColor: layoutColors.defaultText,
      scaleLineColor: layoutColors.border,
      pointLabelFontColor: layoutColors.defaultText
    });
  }

})();

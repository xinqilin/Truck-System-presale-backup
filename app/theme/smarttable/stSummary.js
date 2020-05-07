(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('stSummary', stSummary);

  /** @ngInject */
  function stSummary() {
     return {
      restrict: 'E',
      require: '^stTable',
      template: '共{{size}}筆',
      scope: {},
      link: function (scope, element, attr, ctrl) {
        scope.$watch(ctrl.getFilteredCollection, function  (val) {
          scope.size = (val || []).length;
        })
      }
    };
  }

})();
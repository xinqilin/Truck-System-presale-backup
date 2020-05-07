(function() {
    'use strict';

    angular.module('BlurAdmin.theme.smarttable')
        .directive('stDateRange', ['$timeout', stDateRange])
        
    /** @ngInject */
    function stDateRange($timeout) {
        return {
            restrict: 'E',
            require: '^stTable',
            scope: {
                clearHide: '=?',
                before: '=',
                after: '=',
                menuRight: '=?'
            },
            template: '<datepicker-range clear-hide="true" before="before"\
                    after="after" menu-right="true" btn-hide="true"> </datepicker-range>',

            link: function(scope, element, attr, table) {
                scope.$watch('before', function() {
                    var predicateName = attr.predicate;
                    var query = {};

                    if (scope.before) {
                        query.before = scope.before;
                    }

                    if (scope.after) {
                        query.after = scope.after;
                    }
                    if (scope.before || scope.before) {
                        table.search(query, predicateName);
                    } else {
                        table.search('', predicateName);
                    }
                }, true)
            }
        }
    }
})();
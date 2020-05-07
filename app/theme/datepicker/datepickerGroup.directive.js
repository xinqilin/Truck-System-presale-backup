/**
 * @author v.lugovsky created on 10.12.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.theme.datepicker')
        .directive('datepickerGroup', datepickerGroup)


    /** @ngInject */
    function datepickerGroup() {
        return {
            restrict: "E",
            controller: datepickerCtrl,
            templateUrl: 'app/theme/datepicker/datepickerGroup.html',
            scope: {
                dt: '=ngModel',
                clearHide: '=',
                btnHide: '=',
                maxdate: '=',
                mindate: '='
            }
        };
    }


    function datepickerCtrl($scope) {
        $scope.dateOptions = {
            maxDate: $scope.maxdate,
            minDate: $scope.mindate,
            formatDayTitle: 'yyyy-M',
            formatYear: 'yyyy',
            showWeeks: false,
            startingDay: 1
        };

        $scope.clear = function() {
            $scope.dt = null;
        };

        $scope.formatGroup = 'yy/MM/dd';
        $scope.formatInput = 'yy/MM/dd';

        $scope.popup = {
            opened: false
        };

        $scope.getDayRange = function getDayRange() {
            if (!$scope.before && !$scope.before)
                return '';
            if (!$scope.before)
                $scope.before = " ";
            if (!$scope.after)
                $scope.after = " ";
            return $scope.before + '-' + $scope.after;
        }
    }
})();
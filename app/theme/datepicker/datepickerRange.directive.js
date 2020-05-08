/**
 * @author v.lugovsky created on 10.12.2016
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.theme.datepicker')
        .directive('datepickerRange', datepickerRange);
    /** @ngInject */
    function datepickerRange() {
        return {
            restrict: "E",
            controller: datepickerRangeCtrl,
            templateUrl: 'app/theme/datepicker/datepickerRange.html',
            scope: {
                before: '=?',
                after: '=?',
                menuRight: '=?',
                btnHide:'=?'
            }
        };
    }

    function datepickerRangeCtrl($scope) {
        $scope.format = 'yy/MM/dd HH:mm';

        initOptions();

        $scope.clear = function() {
            delete $scope.before;
            delete $scope.after;
        };

        $scope.$watch('before', function() {
            initOptions();
        }, true)

        $scope.$watch('after', function() {
            initOptions();
        }, true)

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
                var beforeDay = new Date($scope.before).setHours(0, 0, 0, 0);
                var afterDay = new Date($scope.after).setHours(0, 0, 0, 0);
                if (beforeDay < dayToCheck && dayToCheck < afterDay) {
                    return 'range-btn';
                }
                if (beforeDay === dayToCheck) {
                    return 'beforeDay';
                }
                if (dayToCheck === afterDay) {
                    return 'afterDay';
                }
            }
            return '';
        }

        function initOptions() {
            $scope.beforeOptions = {
                customClass: getDayClass,
                datepickerMode: 'day',
                maxDate: $scope.after,
                formatDayTitle: 'yyyy-M',
                formatYear: 'yyyy',
                showWeeks: false,
                startingDay: 1
            };

            $scope.afterOptions = {
                customClass: getDayClass,
                datepickerMode: 'day',
                minDate: $scope.before,
                formatDayTitle: 'yyyy-M',
                formatYear: 'yyyy',
                showWeeks: false,
                startingDay: 1
            }
        }
    }
})();
/**
 * @author a.demeshko
 * created on 23.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.theme')
        .filter('textCut', function() {
            return function(value, wordwise, max, tail) {
                if (!value) return '';

                max = parseInt(max, 10);
                if (!max) return value;
                if (value.length <= max) return value;

                value = value.substr(0, max);
                if (wordwise) {
                    var lastspace = value.lastIndexOf(' ');
                    if (lastspace != -1) {
                        value = value.substr(0, lastspace);
                    }
                }

                return value + (tail || ' …');
            };
        });

})();
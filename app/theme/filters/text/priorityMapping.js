/**
 * @author a.demeshko
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .filter('priorityMapping', priorityMapping);

  /** @ngInject */
  function priorityMapping() {
  	var priorityMapping = {
			Critical : 'Crit',
			High : 'High',
			Medium : 'Med',
			Low : 'Low',
			Info : 'Info'
	};
    return function(text) {
      return  priorityMapping[text];
    };
  }

})();

(function () {
  'use strict';

  angular.module('BlurAdmin.pages.workOrderSetting')
    .controller('workOrderSettingCtrl', workOrderSettingCtrl);

  /** @ngInject */
  function workOrderSettingCtrl($scope, $timeout, $uibModal) { 
	  
	  $scope.assignTableData = [{
		  id : 1000,
		  workOrderLevel : '作業系統問題 / 安全性漏洞 1',
		  workOrderName : '網銀資安弱點',
		  handleDepartment : 'MIS一部',
		  handlePerson : 'Eddie.Lee'
	  },{
		  id : 2000,
		  systemClass : '特殊弱點',
		  workOrderLevel : '作業系統問題 / 安全性漏洞 2',
		  workOrderName : '網銀資安弱點',
		  handleDepartment : 'MIS一部',
		  handlePerson : 'Eddie.Lee'
	  },{
		  id : 3000,
		  workOrderLevel : '作業系統問題 / 安全性漏洞 3',
		  workOrderName : '網銀資安弱點',
		  handleDepartment : 'MIS一部',
		  handlePerson : 'Eddie.Lee'
	  }]
	  
  }})();
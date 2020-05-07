(function () {
  'use strict';

  angular.module('BlurAdmin.pages.riskToLongGoalApply')
    .controller('riskToLongGoalApplyCtrl', riskToLongGoalApplyCtrl );

  /** @ngInject */
  function riskToLongGoalApplyCtrl($scope, $timeout, $uibModal, toastr) { 
	  //datepicker的出始值  
	  $scope.maxdate = new Date(2020, 5, 22); 
	  $scope.mindate = new Date();
	  $scope.date = "";
	  
	  $scope.backToWaitDeal = function () {
		  $scope.$dismiss();//取消彈跳視窗Modal
    	  toastr.info("弱點展延申請已送出");
    	  location.href = '#/waitDeal';
	  };
	  
	  //之後要改帶入動態資料
	  $scope.originalDay = new Date("2017/11/02");
	  
	  //show在網頁上的格式2017/11/4
	  $scope.showOriginalDay = $scope.originalDay.getFullYear() + "/" +($scope.originalDay.getMonth() + 1) + "/" + $scope.originalDay.getDate(); 
	  
	  //給radio box預設值
	  $scope.state = 'accept';   	
	  	
	  //算天數差
	  $scope.getExtendedDay = function(){
		  //$scope.date-$scope.originalDay 換成毫秒數
		  //1000 * 60 * 60 * 24 一天的毫秒數
		  $scope.dayBetween = ($scope.date-$scope.originalDay)/(1000 * 60 * 60 * 24); 
		  if($scope.date === "" || $scope.dayBetween<0){
			  return "";
		  }
		  return "展延天數" + Math.floor($scope.dayBetween) + "天";
	  };
	  
  }})();
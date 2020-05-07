(function () {
  'use strict';

  angular.module('BlurAdmin.pages.riskAcceptanceApply')
    .controller('riskAcceptanceApplyCtrl', riskAcceptanceApplyCtrl);

  /** @ngInject */
  function riskAcceptanceApplyCtrl($scope, $timeout, $uibModal) { 
	  
	  $scope.state = 'accept';   //給radio box預設值
	  
	  $scope.oldSeverity = ''; //原本的風險為此
	  
	  //button切換class
	  $scope.otherButton = "btn btn-default";
	  $scope.selectedButton = "btn btn-primary"; 

      
      //比對風險ID後套出Severity
      $scope.checkSeverity = function(value){
    	  //切出ID 如21157
    	  $scope.pluginID = value.split(" ")[0];
    	  //比對找出該風險的類別  改變button的oldSeverity
    	  for(var i = 0; i < $scope.arrays.length; i++){
    	    if($scope.arrays[i].id == $scope.pluginID){
    	    	$scope.oldSeverity = $scope.arrays[i].type;
    	    }
    	  }
      }
      
      //確認核可要轉跳回待審核頁面
      $scope.sendAndBack = function(){
    	  //先toastr再轉頁面會不會有問題?
    	  toastr.info("收到一則風險接受申請");
    	  location.href = '#/waitCheckList';
      }
      
      //取消要轉跳回待審核頁面
      $scope.back = function(){
    	  location.href = '#/waitCheckList';
      }   
      
      //資料來源
      $scope.arrays=[
    	  {
    		id :10180,
    		name : 'Ping the remote host[checkbox]:Test the local Nessus host',
    		type:'Medium'
    	  },
    	  {
      		id :12288,
      		name : 'Global variable settings[checkbox]:Probe services on every port',
      		type:'Low'
      	  },{
    		id :73490,
    		name : 'Amazon Web Services Settings[checkbox]:Region us-east-1 :',
    		type:'Critical'
    	  },{
    		id :33815,
    		name : 'Database settings[entry]:Database port to use :',
    		type:'High'
    	  },{
    		id :21157,
    		name : 'Unix Compliance Checks[file]:Policy file #4 :',
    		type:'Info'
    	  }
      ]
	     
      	  
	  
	  
  }})();
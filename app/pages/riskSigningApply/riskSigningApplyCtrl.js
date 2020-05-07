(function () {
  'use strict';

  angular.module('BlurAdmin.pages.riskSigningApply')
    .controller('riskSigningApplyCtrl', riskSigningApplyCtrl);

  /** @ngInject */
  function riskSigningApplyCtrl($scope, $timeout, $uibModal, toastr) { 
	  
	  $scope.state = 'accept';   //給radio box預設值
	  $scope.oldSeverity = ''; //原本的風險為此
	  $scope.applyType = true;
	  
	  //button切換class
	  $scope.otherButton = "btn btn-default";
	  $scope.selectedButton = "btn btn-primary"; 
	  
	  //申請類型改變
      $scope.changeType = function(state){
    	  if(state =='riskAdjust'){
    		  $scope.applyType = true; 
    	  }else if(state =='riskAccept'){
        	  $scope.applyType = false;    		  
    	  }

      }
      
      //權限按鈕事件
      $scope.changeCheck = function(state){
    	  $scope.newSeverity = state;
      }
      //button切換class
      
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
    	  if($scope.applyType == true){
        	  toastr.info("送出一則風險調整申請");
    	  }else if($scope.applyType == false){
    		  toastr.info("送出一則風險接受申請");
    	  }

    	  location.href = '#/riskAdjustApply';
    	  $scope.resetPage();
      }
      
      //取消要轉跳回待審核頁面
      $scope.back = function(){
    	  $scope.resetPage();
      }   
      
      //清空頁面資料為預設
      $scope.resetPage = function(){
    	   $scope.oldSeverity = ''; //原本的風險為此
    	   $scope.newSeverity = '';
           $scope.applyType = true;          
           $scope.value = '';
           $scope.explain = '';
      };
      
      
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

      
      //檔案上傳相關//
	  $scope.uploadFiles = [];
      $scope.addFile = function($event){
    	  
    	  var addFiles = document.getElementById('inputFile').files;
    	  
    	  //demo範例寫法
    	  Array.prototype.forEach.call( addFiles, function( addFile ){
    		  $scope.uploadFiles.push(addFile);
    	  });
    	  
   	  
    	  //傳統寫法
//    	  for(var index = 0 ; index < addFiles.length  ;index++){  
//    		  $scope.uploadFiles.push(addFiles[index]);
//    	  }
    	  console.log($scope.uploadFiles);
      
      }
      //刪除欲上傳之檔案
      $scope.deleteFile = function($index){
    	  
    	  $scope.uploadFiles.splice($index,1);
    	  console.log($scope.uploadFiles);
      }
      
      
//	  $scope.$watch('uploadFiles', function () {
//		  $scope.uploadFiles = $scope.uploadFiles;
//	  }, true);
      //檔案上傳相關//
      
  }})();
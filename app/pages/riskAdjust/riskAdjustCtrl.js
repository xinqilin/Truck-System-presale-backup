(function () {
  'use strict';

  angular.module('BlurAdmin.pages.riskAdjust' )
    .controller('riskAdjustCtrl', riskAdjustCtrl);

  /** @ngInject */
  function riskAdjustCtrl($scope, $timeout, $uibModal, toastr) { 
	  
	  $scope.comment = "IP = 192.168.0.39 \r\n <br> 範圍等於全部";
	  
	  $scope.IPs = [];
	  $scope.scope = 'All';   
      $scope.protocol = 'Any';
      $scope.isKPIReset = 'Yes';
      $scope.date = "";
      $scope.isShowIP = false; 	  //是否showIPs這欄位
      $scope.isShowAsset = false; //是否showAsset這欄位
	  
	  //如果IP input 按enter 自動focus到 port
	  $scope.typeIP = function($event){
		  if($event.which === 13){
			  $scope.isPortFocus = true;
		  }
	  };
	  
	  //新增IP 跟 port
	  $scope.addIP = function ( ip , port , isEnter , $event) { 
		  //如果key字不是按enter直接return
		  if(isEnter){
			  if($event.which !== 13){
				  return;  
			  }
		  }
		  //確保ip一定有值
    	  if(angular.isUndefined($scope.IP.ip)|| $scope.IP.ip==""){
    		  return;
    	  }
		  $scope.IPs.push({ ip : ip , port : port});
		  //input清空
		  delete $scope.IP.ip;
		  delete $scope.IP.port;
		  
		  //focus回去IP
		  if($event.which===13){
			  $scope.isIPFocus = true;
		  }
		  
	  };
	  
	  //IP刪除
	  $scope.removeIP = function(index){
		   $scope.IPs.splice(index, 1)
	  };
	  
	  //datepicker directive 要給的出始值	  
	  $scope.maxdate = new Date(2020, 5, 22); 
	  $scope.mindate = new Date();
	  
  
	  
	  //許可&拒絕button切換class
	  $scope.otherButton="btn btn-default";
	  $scope.selectedButton="btn btn-primary"; 
	  $scope.state = 'accept';   //給radio box預設值
 
      $scope.changeCheck=function(num){
    	  $scope.state=num;
      }
      //許可&拒絕button切換class
      
      //套用範圍      
      
      $scope.selectScope = function(num){
    	  $scope.scope = num;
    	  if(num==="IPs"){
    		  $scope.isShowIP = true;
    		  $scope.isShowAsset = false;
    	  }else if(num==="Asset"){
    		  $scope.isShowAsset = true;
    		  $scope.isShowIP = false;
    	  }else{
    		  $scope.isShowIP = false;
    		  $scope.isShowAsset = false;
    	  }
      }
      
      $scope.selectProtocol = function(num){
    	  $scope.protocol = num;
      }
      //套用範圍 

      //KPI重算與否
      $scope.resetKPI = function(num){
    	  $scope.isKPIReset = num;
      }
      
      //確認核可要轉跳回待審核頁面
      $scope.sendAndBack = function(){
    	  //先toastr再轉頁面會不會有問題?
    	  toastr.info("風險調整審核已完成");
    	  location.href = '#/waitCheckList';
      }
      
      //取消要轉跳回待審核頁面
      $scope.back = function(){
    	  location.href = '#/waitCheckList';
      }     
      
      //Asset資產清單
      $scope.assetList = [
    	  "Anti-Virus Current", 
    	  "Apple Computer",
    	  "Botnet Activity",
    	  "Bad Credentials",
    	  "Device Type VPN",
    	  "Internet Facing Asset",
    	  "Linux Hosts",
    	  "Windows Hosts"	  
      ];
      
      
	  
  }})();
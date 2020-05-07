(function () {
  'use strict';

  angular.module('BlurAdmin.pages.riskToLongGoal')
    .controller('riskToLongGoalCtrl', riskToLongGoalCtrl);

  /** @ngInject */
  function riskToLongGoalCtrl($scope, $timeout, $uibModal, toastr) { 
	  
	  $scope.IPs = [];
	  $scope.scope = 'All';   
      $scope.protocol = 'Any';
      $scope.isKPIReset = 'Yes';
      $scope.date = "";
	  
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
      
      $scope.selectScope = function(state){
    	  $scope.scope = state;
      }
      
      $scope.selectProtocol = function(state){
    	  $scope.protocol = state;
      }
      //套用範圍 

      //KPI重算與否
      $scope.resetKPI = function(state){
    	  $scope.isKPIReset = state;
      }
      
      //確認核可要轉跳回待審核頁面
      $scope.sendAndBack = function(){
    	  //先toastr再轉頁面會不會有問題?
    	  if($scope.state === 'accept'){
    		  toastr.info("弱點展延審核已核可");  
    	  }else if($scope.state === 'refuse'){
    		  toastr.info("弱點展延審核已拒絕");  
    	  }
    	  location.href = '#/waitCheckCaseList';
      }
      
      //取消要轉跳回待審核頁面
      $scope.back = function(){
    	  location.href = '#/waitCheckCaseList';
      }      
      
      $scope.open = function(page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                component: page,
                controller: 'workOrderDetailCtrl',
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });
        };
      
      /*時間 操作 處理人員 信件通知 備註*/
      $scope.record = [{
            data: '2015/07/01',
            operate: 'New',
            handler: 'system',
            note: '',
        }, {
            data: '2015/07/25',
            operate: '新增說明',
            handler: 'bank',
            note: '詳細資料',
        }, {
            data: '2015/07/31',
            operate: '延期申請',
            handler: 'bank',
            note: '',
        }, {
            data: '2015/08/04',
            operate: '延期申請審核通過',
            handler: 'Alien',
            note: '',
        }, {
            data: '2015/09/01',
            operate: '轉派',
            handler: 'Alien',
            note: '由bank轉派給will',
        }, {
            data: '2015/09/09',
            operate: '新增說明',
            handler: 'Alien',
            note: '詳細資料',
        }, {
            data: '2015/09/10',
            operate: '延期申請',
            handler: 'will',
            note: '',
        }, {
            data: '2015/09/10',
            operate: '延期申請審核通過',
            handler: 'Alien',
            note: '',
        }, {
            data: '2015/09/20',
            operate: '延期申請',
            handler: 'will',
            note: '',
        }, {
            data: '2015/09/20',
            operate: '延期申請審核通過',
            handler: 'Alien',
            note: '',
        }, {
            data: '2015/09/30',
            operate: '風險接受申請',
            handler: 'will',
            note: '',
        }, {
            data: '2015/10/15',
            operate: '風險接受審核通過',
            handler: 'Alien',
            email: 'bank@gmail.com',
            note: '',
        }, {
            data: '2015/10/16',
            operate: '已結束',
            handler: 'Alien',
            email: 'Mega@gmail.com',
            note: '',
        }, {
            data: '2015/10/16',
            operate: '已結束',
            handler: 'bank',
            email: 'Alien@gmail.com Mega@gmail.com',
            note: '',
        }];
	  
  }})();
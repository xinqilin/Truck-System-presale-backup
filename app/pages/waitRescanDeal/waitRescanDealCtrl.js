(function() {
	'use strict';

	angular.module('BlurAdmin.pages.waitRescanDeal').controller(
			'waitRescanDealCtrl', waitRescanDealCtrl);

	/** @ngInject */
	function waitRescanDealCtrl($scope, $timeout, $filter) {
		$scope.buttonName = "抽單";
		$scope.buttonClass = "btn btn-success";
		$scope.selected = {};
		$scope.doRescanTicket = [];
		

		$scope.statusMapping = {
			critical : 'Critical',
			high : 'High',
			medium : 'Medium',
			low : 'Low',
			info : 'Info'
		};

		// 將畫面重導致弱點細項畫面
		$scope.clickRow = function(id) {
			location.href = '#/workOrderDetail';

		};
		
		$scope.selectAll=function(){
			angular.forEach($scope.criticalTicket,function(Ticket){
				Ticket.checked=$scope.checkall;
			});
		}
		
		$scope.selectOne=function(){
			$scope.checkall=false;
		}

		// 執行取消複掃動作
		$scope.cancelRescanning = function() {
			//清除doRescanTicket
			$scope.doRescanTicket=[];
			// 找出已選擇資料
			for(var i=0;i<$scope.criticalTicket.length;i++){
				if($scope.criticalTicket[i].checked===true){
					$scope.doRescanTicket.push($scope.criticalTicket[i]);
				}
			}
		}

		// 人員資料
		$scope.peopleTableData = [ {
			id : 1,
			firstName : 'AAA',
			lastName : '500-0966',
			username : '張三一',
			status : 'car'
			
		}, {
			id : 2,
			firstName : 'BBB',
			lastName : '557-8901',
			username : '李四五',
			status : 'car'
		
		}, {
			id : 3,
			firstName : 'CCC',
			lastName : '500-0907',
			username : '李四四',
			status : 'clock'
		}, {
			id : 4,
			firstName : 'DDD',
			lastName : '500-0908',
			username : '丁一一',
			status : 'clock'
		}, {
			id : 5,
			firstName : 'EEE',
			lastName : '500-0977',
			username : '丁一二',
			status : 'nike'
		}, {
			id : 6,
			firstName : 'FFF',
			lastName : '500-0972',
			username : '張三二',
			status : 'nike'
		}, {
			id : 7,
			firstName : 'GGG',
			lastName : '500-0971',
			username : '張一二',
			status : 'ban'
		} ];



		
		$scope.carTableData = [ {
			id : 1,
			firstName : 'AAA',
			lastName : '500-0966',
			username : '張三一',
			status : 'car'
			
		}, {
			id : 2,
			firstName : 'BBB',
			lastName : '557-8901',
			username : '李四五',
			status : 'car'
		
		}, {
			id : 3,
			firstName : 'CCC',
			lastName : '500-0907',
			username : '李四四',
			status : 'clock'
		}, {
			id : 4,
			firstName : 'DDD',
			lastName : '500-0908',
			username : '丁一一',
			status : 'clock'
		}, {
			id : 5,
			firstName : 'EEE',
			lastName : '500-0977',
			username : '丁一二',
			status : 'nike'
		}, {
			id : 6,
			firstName : 'FFF',
			lastName : '500-0972',
			username : '張三二',
			status : 'nike'
		}, {
			id : 7,
			firstName : 'GGG',
			lastName : '500-0971',
			username : '張一二',
			status : 'ban'
		} ];



		

	}
})();
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
			pic:'assets/img/truck-016.ico',
			firstName : 'AAA',
			lastName : '500-0966',
			username : '張三一',
			status : 'car',
			statustext:'執行業務中',
			phone:'0912-123456',
			elocation:'https://www.google.com.tw/'
			
		}, {
			id : 2,
			pic:'assets/img/truck-016.ico',
			firstName : 'BBB',
			lastName : '557-8901',
			username : '李四五',
			status : 'car',
			statustext:'執行業務中',
			phone:'0912-123456',
			elocation:'https://www.google.com.tw/'
		
		}, {
			id : 3,
			pic:'assets/img/truck-016.ico',
			firstName : 'CCC',
			lastName : '500-0907',
			username : '李四四',
			status : 'car',
			statustext:'執行業務中',
			phone:'0912-123456',
			elocation:'https://www.google.com.tw/'
		}, {
			id : 4,
			pic:'assets/img/clock-016.ico',
			firstName : 'DDD',
			lastName : '500-0908',
			username : '丁一一',
			status : 'clock',
			statustext:'等待出車',
			phone:'0912-987654',
			elocation:''
		}, {
			id : 5,
			pic:'assets/img/greencheck.png',
			firstName : 'GHG',
			lastName : '500-0977',
			username : '丁一二',
			status : 'nike',
			statustext:'排班中',
			phone:'0912-987654',
			elocation:''
		}, {
			id : 6,
			pic:'assets/img/greencheck.png',
			firstName : 'HGH',
			lastName : '500-0972',
			username : '張三二',
			status : 'nike',
			statustext:'排班中',
			phone:'0912-987654',
			elocation:''
		}, {
			id : 7,
			pic:'assets/img/ban-16.ico',
			firstName : 'GGG',
			lastName : '500-0971',
			username : '張一二',
			status : 'ban',
			statustext:'休假中',
			phone:'0912-987654',
			elocation:''
		}, {
			id : 8,
			pic:'assets/img/ban-16.ico',
			firstName : 'HHH',
			lastName : '500-0971',
			username : '張一恩',
			status : 'ban',
			statustext:'休假中',
			phone:'0912-987654',
			elocation:''
		}, {
			id : 9,
			pic:'assets/img/ban-16.ico',
			firstName : 'HHG',
			lastName : '500-0971',
			username : '林一二',
			status : 'ban',
			statustext:'休假中',
			phone:'0912-987654',
			elocation:''
		}, {
			id : 10,
			pic:'assets/img/truck-016.ico',
			firstName : 'GGH',
			lastName : '500-0971',
			username : '我一二',
			status : 'car',
			statustext:'休執行業務中',
			phone:'0912-987654',
			elocation:''
		}
	 ];



		
		$scope.carTableData = [ {
			id : 1,
			pic:'assets/img/truck-016.ico',
			firstName : 'AAA',
			lastName : '500-0966',
			username : '張三一',
			status : 'car',
			statustext:'執行業務中',
			phone:'0912-123456',
			elocation:'https://www.google.com.tw/'
			
		}, {
			id : 2,
			pic:'assets/img/truck-016.ico',
			firstName : 'BBB',
			lastName : '557-8901',
			username : '李四五',
			status : 'car',
			statustext:'執行業務中',
			phone:'0912-123456',
			elocation:'https://www.google.com.tw/'
		
		}, {
			id : 3,
			pic:'assets/img/truck-016.ico',
			firstName : 'CCC',
			lastName : '500-0907',
			username : '李四四',
			status : 'car',
			statustext:'執行業務中',
			phone:'0912-123456',
			elocation:'https://www.google.com.tw/'
		}, {
			id : 4,
			pic:'assets/img/clock-016.ico',
			firstName : 'DDD',
			lastName : '500-0908',
			username : '丁一一',
			status : 'clock',
			statustext:'等待出車',
			phone:'0912-987654',
			elocation:''
		}, {
			id : 5,
			pic:'assets/img/greencheck.png',
			firstName : 'GHG',
			lastName : '500-0977',
			username : '丁一二',
			status : 'nike',
			statustext:'排班中',
			phone:'0912-987654',
			elocation:''
		}, {
			id : 6,
			pic:'assets/img/greencheck.png',
			firstName : 'HGH',
			lastName : '500-0972',
			username : '張三二',
			status : 'nike',
			statustext:'排班中',
			phone:'0912-987654',
			elocation:''
		}, {
			id : 7,
			pic:'assets/img/ban-16.ico',
			firstName : 'GGG',
			lastName : '500-0971',
			username : '張一二',
			status : 'ban',
			statustext:'休假中',
			phone:'0912-987654',
			elocation:''
		}, {
			id : 8,
			pic:'assets/img/ban-16.ico',
			firstName : 'HHH',
			lastName : '500-0971',
			username : '張一恩',
			status : 'ban',
			statustext:'休假中',
			phone:'0912-987654',
			elocation:''
		}, {
			id : 9,
			pic:'assets/img/ban-16.ico',
			firstName : 'HHG',
			lastName : '500-0971',
			username : '林一二',
			status : 'ban',
			statustext:'休假中',
			phone:'0912-987654',
			elocation:''
		}, {
			id : 10,
			pic:'assets/img/truck-016.ico',
			firstName : 'GGH',
			lastName : '500-0971',
			username : '我一二',
			status : 'car',
			statustext:'執行業務中',
			phone:'0912-987654',
			elocation:''
		}
	 ];



		

	}
})();
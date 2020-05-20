(function () {
	'use strict';

	angular.module('BlurAdmin.pages.waitRescanDeal').controller(
		'waitRescanDealCtrl', waitRescanDealCtrl);

	/** @ngInject */
	function waitRescanDealCtrl($scope, $timeout, $filter) {
		$scope.buttonName = "抽單";
		$scope.buttonClass = "btn btn-success";
		$scope.selectedData = {};
		$scope.doRescanTicket = [];
		$scope.newRecord = {};

		$scope.data=false;
		$scope.assignNote = true;
		$scope.triplicateForm = true;
		$scope.rowCollection = [];
		$scope.isEditMode = false;
		
		
		$scope.saveEdit = function(){
			$scope.selectedData.arriveTime=$scope.selectedData.arriveTime.getHours()+':'+$scope.selectedData.arriveTime.getMinutes();
			$scope.selectedData.returnTime=$scope.selectedData.returnTime.getHours()+':'+$scope.selectedData.returnTime.getMinutes();
			// console.log($scope.selectedData.arriveTime)
			var index = $scope.rowCollection.indexOf($scope.selectedData);
			if (index !== -1) {
				$scope.rowCollection.splice(index, 1, $scope.selectedData);
			}
			console.log($scope.selectedData);
			$scope.data=false;
			$scope.isEditMode = false;
		}

		$scope.asstCount=0;
		$scope.addAsst=function(){
			$scope.asstCount++;
		}
		$scope.reduceAsst=function(){
			$scope.asstCount--;
		}

		$scope.showAdd=function(){
			$scope.data=true;
			$scope.isEditMode = false;
		}
		$scope.hideAdd=function(){
			$scope.data=false;
			$scope.asstCount=0;
		}
		$scope.hideAddPage2=function(){
			$scope.data=false;
			// $scope.asstCount=0;
		}

		$scope.showDetail = function (row) {
			$scope.isEditMode = false;
			$scope.selectedData = row;
			$scope.data=false;
		}

		$scope.detele = function(event,row){
			event.stopPropagation();
			var index = $scope.rowCollection.indexOf(row);
			if (index !== -1) {
				$scope.rowCollection.splice(index, 1);
			}
		}

		$scope.edit = function(event,row){
			event.stopPropagation();
			$scope.selectedData = row
			$scope.data=false;
			$scope.isEditMode = true;
		}

		$scope.save = function(){
			$scope.newRecord.id = _uuid();
			console.log($scope.selectedData);
			// doRescanTicket.push($scope.newRecord);
			$scope.newRecord={};
		}

		$scope._uuid = function() {
			var d = Date.now();
			if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
			  d += performance.now(); //use high-precision timer if available
			}
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			  var r = (d + Math.random() * 16) % 16 | 0;
			  d = Math.floor(d / 16);
				return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
			});
		  }

		$scope.dateFormatter = function (dateString) {
			var time = new Date(dateString);
			var year = time.getFullYear();
			var month = time.getMonth();
			var date = time.getDate();
			var hour = time.getHours();
			var min = time.getMinutes();
			var ampm = hour > 12 ? 'PM' : 'AM';
			hour %= 12;
			hour = hour < 10 ? '0' + hour : hour;
			return year + '/' + month + '/' + date + '<br>' + ampm + ' ' + hour + ':' + min;
		}


		$scope.truckInfo = [
			{
				id: 1,
				location: "台北",
				usedDate: '2020-5-19 17:30',
				type: '3.5噸',
				lincenseNo: 'KPA-0001',
				driver: '丁十一',
				assistant: ['丁一一', '丁一二'],
				cargoContent: '事務機5台、事務機基座5台、不斷電設備2台',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '易碎物品，請小心運送。 ',
				amount: '10',
				dispense: { '車輛成本': 4500, '丁一一': 3000, '丁十一': 3000 },
				arriveTime: '12:30',
				returnTime: '18:30'
			},
			{
				id: 2,
				location: "台北",
				usedDate: '2020/5/19 17:30',
				type: '3.5噸',
				lincenseNo: 'KPA-0001',
				driver: '丁十一',
				assistant: ['丁一一', '丁一二'],
				cargoContent: '事務機5台、事務機基座5台、不斷電設備2台',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '易碎物品，請小心運送。 ',
				amount: '10',
				dispense: { '車輛成本': 4500, '丁一一': 3000, '丁十一': 3000 },
				arriveTime: '12:30',
				returnTime: '18:30'
			}, {
				id: 3,
				location: "台北",
				usedDate: '2020/5/19 17:30',
				type: '3.5噸',
				lincenseNo: 'KPA-0001',
				driver: '丁十一',
				assistant: ['丁一一', '丁一二'],
				cargoContent: '事務機5台、事務機基座5台、不斷電設備2台',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '易碎物品，請小心運送。 ',
				amount: '10',
				dispense: { '車輛成本': 4500, '丁一一': 3000, '丁十一': 3000 },
				arriveTime: '12:30',
				returnTime: '18:30'
			}, {
				id: 4,
				location: "台北",
				usedDate: '2020/5/19 17:30',
				type: '3.5噸',
				lincenseNo: 'KPA-0001',
				driver: '丁十一',
				assistant: ['丁一一', '丁一二'],
				cargoContent: '事務機5台、事務機基座5台、不斷電設備2台',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '易碎物品，請小心運送。 ',
				amount: '10',
				dispense: { '車輛成本': 4500, '丁一一': 3000, '丁十一': 3000 },
				arriveTime: '12:30',
				returnTime: '18:30'
			}, {
				id: 5,
				location: "台北",
				usedDate: '2020/5/19 17:30',
				type: '3.5噸',
				lincenseNo: 'KPA-0001',
				driver: '丁十一',
				assistant: ['丁一一', '丁一二'],
				cargoContent: '事務機5台、事務機基座5台、不斷電設備2台',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '易碎物品，請小心運送。',
				amount: '10',
				dispense: { '車輛成本': 4500, '丁一一': 3000, '丁十一': 3000 },
				arriveTime: '12:30',
				returnTime: '18:30'
			}, {
				id: 6,
				location: "台北",
				usedDate: '2020/5/19 17:30',
				type: '3.5噸',
				lincenseNo: 'KPA-0001',
				driver: '丁十一',
				assistant: ['丁一一', '丁一二'],
				cargoContent: '事務機5台、事務機基座5台、不斷電設備2台',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '易碎物品，請小心運送。',
				amount: '10',
				dispense: { '車輛成本': 4500, '丁一一': 3000, '丁十一': 3000 },
				arriveTime: '12:30',
				returnTime: '18:30'
			}, {
				id: 7,
				location: "台北",
				usedDate: '2020/5/19 17:30',
				type: '3.5噸',
				lincenseNo: 'KPA-0001',
				driver: '丁十一',
				assistant: ['丁一一', '丁一二'],
				cargoContent: '事務機5台、事務機基座5台、不斷電設備2台',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '易碎物品，請小心運送。',
				amount: '10',
				dispense: { '車輛成本': 4500, '丁一一': 3000, '丁十一': 3000 },
				arriveTime: '12:30',
				returnTime: '18:30'
			}, {
				id: 8,
				location: "台北",
				usedDate: '2020/5/19 17:30',
				type: '3.5噸',
				lincenseNo: 'KPA-0001',
				driver: '丁十一',
				assistant: ['丁一一', '丁一二'],
				cargoContent: '事務機5台、事務機基座5台、不斷電設備2台',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '易碎物品，請小心運送。',
				amount: '10',
				dispense: { '車輛成本': 4500, '丁一一': 3000, '丁十一': 3000 },
				arriveTime: '12:30',
				returnTime: '18:30'
			}
		];

		
		for(var item in $scope.truckInfo){
			$scope.rowCollection.push($scope.truckInfo[item]);
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
			id : 10,
			pic:'assets/img/truck-016.ico',
			firstName : 'GGH',
			lastName : '500-0971',
			username : '我一二',
			status : 'car',
			statustext:'休執行業務中',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}
		, {
			id : 4,
			pic:'assets/img/clock-016.ico',
			firstName : 'DDD',
			lastName : '500-0908',
			username : '丁一一',
			status : 'clock',
			statustext:'等待出車',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}, {
			id : 5,
			pic:'assets/img/greencheck.png',
			firstName : 'GHG',
			lastName : '500-0977',
			username : '丁一二',
			status : 'nike',
			statustext:'排班中',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}, {
			id : 6,
			pic:'assets/img/greencheck.png',
			firstName : 'HGH',
			lastName : '500-0972',
			username : '張三二',
			status : 'nike',
			statustext:'排班中',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}, {
			id : 7,
			pic:'assets/img/ban-16.ico',
			firstName : 'GGG',
			lastName : '500-0971',
			username : '張一二',
			status : 'ban',
			statustext:'休假中',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}, {
			id : 8,
			pic:'assets/img/ban-16.ico',
			firstName : 'HHH',
			lastName : '500-0971',
			username : '張一恩',
			status : 'ban',
			statustext:'休假中',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}, {
			id : 9,
			pic:'assets/img/ban-16.ico',
			firstName : 'HHG',
			lastName : '500-0971',
			username : '林一二',
			status : 'ban',
			statustext:'休假中',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
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
			id : 10,
			pic:'assets/img/truck-016.ico',
			firstName : 'GGH',
			lastName : '500-0971',
			username : '我一二',
			status : 'car',
			statustext:'執行業務中',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}
		, {
			id : 4,
			pic:'assets/img/clock-016.ico',
			firstName : 'DDD',
			lastName : '500-0908',
			username : '丁一一',
			status : 'clock',
			statustext:'等待出車',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}, {
			id : 5,
			pic:'assets/img/greencheck.png',
			firstName : 'GHG',
			lastName : '500-0977',
			username : '丁一二',
			status : 'nike',
			statustext:'排班中',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}, {
			id : 6,
			pic:'assets/img/greencheck.png',
			firstName : 'HGH',
			lastName : '500-0972',
			username : '張三二',
			status : 'nike',
			statustext:'排班中',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}, {
			id : 17,
			pic:'assets/img/ban-16.ico',
			firstName : 'GGG',
			lastName : '500-0971',
			username : '張一二',
			status : 'ban',
			statustext:'休假中',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}, {
			id : 18,
			pic:'assets/img/ban-16.ico',
			firstName : 'HHH',
			lastName : '500-0971',
			username : '張一恩',
			status : 'ban',
			statustext:'休假中',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}, {
			id : 19,
			pic:'assets/img/ban-16.ico',
			firstName : 'HHG',
			lastName : '500-0971',
			username : '林一二',
			status : 'ban',
			statustext:'休假中',
			phone:'0912-987654',
			elocation:'https://www.google.com.tw/'
		}
	 ];

	}
})();
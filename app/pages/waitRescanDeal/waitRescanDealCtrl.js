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

		$scope.showDetail = function (rowData) {
			$scope.selectedData = rowData;
			console.log($scope.selectedData);
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


		// 嚴重危險群展示資料
		$scope.truckInfo = [
			{
				id: 1,
				location: "台北",
				usedDate: '2020-5-19 17:30',
				type: '3.5噸',
				lincenseNo: 'KPA-0001',
				driver: '丁十一',
				assistant: ['丁一一', '丁一二'],
				cargoContent: 'testt esttesttesttes  ttes ttesttest',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '在訂單成立後，若店家需要與顧客聯繫相關事項，或是註記出貨注意事項提醒出貨人員。店家可以在訂單頁面，運用「訂單通訊」欄位進行操作。 ',
				amount: '10',
				dispense: { '車輛': 4, '丁一一': 3, '丁十一': 3 },
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
				cargoContent: 'te sttesttesttes ttestte sttesttest',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '在訂單成立後，若店家需要與顧客聯繫相關事項，或是註記出貨注意事項提醒出貨人員。店家可以在訂單頁面，運用「訂單通訊」欄位進行操作。 ',
				amount: '10',
				dispense: { '車輛': 4, '丁一一': 3, '丁十一': 3 },
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
				cargoContent: 'testtesttes ttesttestt esttesttest',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '在訂單成立後，若店家需要與顧客聯繫相關事項，或是註記出貨注意事項提醒出貨人員。店家可以在訂單頁面，運用「訂單通訊」欄位進行操作。 ',
				amount: '10',
				dispense: { '車輛': 4, '丁一一': 3, '丁十一': 3 },
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
				cargoContent: 'testtesttest testtesttestt esttest',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '在訂單成立後，若店家需要與顧客聯繫相關事項，或是註記出貨注意事項提醒出貨人員。店家可以在訂單頁面，運用「訂單通訊」欄位進行操作。 ',
				amount: '10',
				dispense: { '車輛': 4, '丁一一': 3, '丁十一': 3 },
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
				cargoContent: 'testtes ttesttesttesttest testtest',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: 'eading professional golfers are to return to competitive action for the first time in months after a shutdown due to the COVID-19 pandemic when three of the world’s top 10 women tee off in South Korea today.',
				amount: '10',
				dispense: { '車輛': 4, '丁一一': 3, '丁十一': 3 },
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
				cargoContent: 'testtes ttesttesttestte sttesttttesttesttesest',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '易碎物品',
				amount: '10',
				dispense: { '車輛': 4, '丁一一': 3, '丁十一': 3 },
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
				cargoContent: 'testtes ttesttesttestte sttesttttesttesttesest',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '在訂單成立後，若店家需要與顧客聯繫相關事項，或是註記出貨注意事項提醒出貨人員。店家可以在訂單頁面，運用「訂單通訊」欄位進行操作。',
				amount: '10',
				dispense: { '車輛': 4, '丁一一': 3, '丁十一': 3 },
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
				cargoContent: 'testtes ttesttesttestte sttesttttesttesttesest',
				starting: '110台北市信義區信義路五段7號89樓',
				terminal: '400台中市中區台灣大道一段1號',
				remark: '在訂單成立後，若店家需要與顧客聯繫相關事項，或是註記出貨注意事項提醒出貨人員。店家可以在訂單頁面，運用「訂單通訊」欄位進行操作。',
				amount: '10',
				dispense: { '車輛': 4, '丁一一': 3, '丁十一': 3 },
				arriveTime: '12:30',
				returnTime: '18:30'
			}
		];

		// 人員資料
		$scope.peopleTableData = [{
			id: 1,
			firstName: 'Mark',
			lastName: 'Otto',
			username: '@mdo',
			email: 'mdo@gmail.com',
			age: '28',
			department: 'Human Resources Department'
		}, {
			id: 2,
			firstName: 'Jacob',
			lastName: 'Thornton',
			username: '@fat',
			email: 'fat@yandex.ru',
			age: '45',
			status: 'primary'
		}, {
			id: 3,
			firstName: 'Larry',
			lastName: 'Bird',
			username: '@twitter',
			email: 'twitter@outlook.com',
			age: '18',
			department: 'Technolog Department'
		}, {
			id: 4,
			firstName: 'John',
			lastName: 'Snow',
			username: '@snow',
			email: 'snow@gmail.com',
			age: '20',
			department: 'Human Resources Department'
		}, {
			id: 5,
			firstName: 'Jack',
			lastName: 'Sparrow',
			username: '@jack',
			email: 'jack@yandex.ru',
			age: '30',
			department: 'Research and Development Department'
		}];

	}
})();
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.searchCase')
			.controller('searchCaseCtrl', searchCaseCtrl);

	/** @ngInject */
	function searchCaseCtrl($scope, $filter) {
		
		$scope.displayData;

		$scope.filterCondition = {
			Keyword : "",
			CreateBeforeDate : "",
			CreateAfterDate : "",
			ExpectedBeforeDate : "",
			ExpectedAfterDate : "",
			Device : "",
			IPandPort : "",
			Handler : "",
			Priority : "",
			Status :"",
			selectedOSandVer : []
		};
		$scope.concludeCodition = [];

		$scope.labelClassMapping = {
			overdue : 'label label-danger border-radius',
			expiring : 'label label-warning border-radius',
		};

		$scope.labelContextMapping = {
			overdue : '已逾期',
			expiring : '即將逾期',
		};

		// 將畫面重導致弱點細項畫面
		$scope.clickRow = function(id) {
			location.href = '#/workOrderDetail';
		};

		// 重新搜尋
		$scope.reSearch = function() {
			$scope.showConclusion = false;
		}

		// 搜尋按鈕
		$scope.searchCase = function() {
			// console.log($scope.inputDevice)

			// 如果為空值則將其清除
			if ($scope.inputKeyword === "") {
				delete $scope.inputKeyword;
			}

			// 抓取過濾條件
			$scope.filterCondition.Keyword = $scope.inputKeyword;
			$scope.filterCondition.Department = $scope.inputDepartment;
			$scope.filterCondition.CreateBeforeDate = $scope.inputCreateBeforeDate;
			$scope.filterCondition.CreateAfterDate = $scope.inputCreateAfterDate;
			$scope.filterCondition.ExpectedBeforeDate = $scope.inputExpectedBeforeDate;
			$scope.filterCondition.ExpectedAfterDate = $scope.inputExpectedAfterDate;
			$scope.filterCondition.Device = $scope.inputDevice;
			$scope.filterCondition.IPandPort = $scope.inputIPandPort;
			$scope.filterCondition.Handler = $scope.inputHandler;
			$scope.filterCondition.Priority = $scope.inputPriority;
			$scope.filterCondition.Status = $scope.inputStatus;
			if (!angular.isUndefined($scope.inputOSandVer)) {
				$scope.filterCondition.selectedOSandVer = $scope.inputOSandVer;
			}
			$scope.isFilterSetting = true;
			$scope.showConclusion = true;
			$scope.concludeCodition = [];
			// 新增條件至總結
			angular.forEach($scope.filterCondition, function(value) {
				// 不為空值或undefiened就加入conclusion
				if (value != "" && !angular.isUndefined(value)) {

					if (angular.isArray(value)) {// 確定是不是多選欄位
						var result = "";
						// 串接成字串
						angular.forEach(value, function(item) {
							result = item + "," + result;
						});
						// 去尾
						result = result.substring(0, result.length - 1);
						$scope.concludeCodition.push(result);
					} else if (angular.isDate(value)) {// 日期另外處理

					} else {// 單選則直接加入
						$scope.concludeCodition.push(value);
					}
				}
			});

			// 只要起始日或是結束日友值，條件就成立
			if (!angular.isUndefined($scope.inputCreateBeforeDate)
					|| !angular.isUndefined($scope.inputCreateAfterDate)) {
				var createRangeDate = $scope.convertRangeDate(
						$scope.inputCreateBeforeDate,
						$scope.inputCreateAfterDate);
				createRangeDate = "成單日:" + createRangeDate;
				$scope.concludeCodition.push(createRangeDate);
			}
			if (!angular.isUndefined($scope.inputExpectedBeforeDate)
					|| !angular.isUndefined($scope.inputExpectedAfterDate)) {
				var expectedRangeDate = $scope.convertRangeDate(
						$scope.inputExpectedBeforeDate,
						$scope.inputExpectedAfterDate);
				expectedRangeDate = "預計完成日:" + expectedRangeDate;
				$scope.concludeCodition.push(expectedRangeDate);
			}			
			//對CritTicket進行過濾並把結果由displayData帶給smart table
			$scope.displayData=$filter('customFilter')($scope.CritTicket,$scope.filterCondition,$scope.isFilterSetting);
		}

		// 日期範圍轉成字串
		$scope.convertRangeDate = function(from, to) {
			var fromDate = new Date(from);
			var toDate = new Date(to);
			var result = "";
			// 對於起始日或結束日沒選時，顯示不同字串
			if (isNaN(fromDate.getFullYear())) {// 起始日沒選
				result = toDate.getFullYear() + "/" + (toDate.getMonth() + 1)
						+ "/" + toDate.getDate() + "之前";
				return result;
			}
			if (isNaN(toDate.getFullYear())) {// 起始日沒選
				result = fromDate.getFullYear() + "/"
						+ (fromDate.getMonth() + 1) + "/" + fromDate.getDate()
						+ "之後";
				return result;
			}
			result = fromDate.getFullYear() + "/" + (fromDate.getMonth() + 1)
					+ "/" + fromDate.getDate() + "-" + toDate.getFullYear()
					+ "/" + (toDate.getMonth() + 1) + "/" + toDate.getDate();
			return result;
		}

		// 清除所有條件
		$scope.cleanCodition = function() {
			delete $scope.inputKeyword;
			delete $scope.inputStatus;
			delete $scope.inputCreateBeforeDate;
			delete $scope.inputCreateAfterDate;
			delete $scope.inputExpectedBeforeDate;
			delete $scope.inputExpectedAfterDate;
			delete $scope.inputDevice;
			delete $scope.inputIPandPort;
			delete $scope.inputHandler;
			delete $scope.inputPriority;
			$scope.filterCondition.selectedOSandVer = [];
			delete $scope.filterCondition.Keyword;
			delete $scope.filterCondition.CreateBeforeDate;
			delete $scope.filterCondition.CreateAfterDate;
			delete $scope.filterCondition.ExpectedBeforeDate;
			delete $scope.filterCondition.ExpectedAfterDate;

			$scope.isFilterSetting = false;
		}

		// 每列資料點擊觸發事件
		$scope.clickRow = function(id) {
			$scope.redirectDetail();
			// if (!$scope.batchMode) {
			// location.href = '#/workOrderDetail';
			// } else {
			// var onClickRow = document.getElementById('inlineCheckbox' + id);
			// onClickRow.checked = !onClickRow.checked;
			// $scope.redirectToggle = true;
			// }
		};

		// 重導致workOrderDetail
		$scope.redirectDetail = function() {
			location.href = '#/workOrderDetail';
		}
		// 展示資料
		$scope.CritTicket = [
				{
					id : 1,
					weaknessid : 90091,
					status : '待處理',
					device : '動態密碼系統AP Server更改IP網段',
					priority : 'Crit',
					IPandPort : '192.168.6.12',
					OSandVer : 'Windows 8',
					ticketName : 'MS KB2269637: Insecure Library Loading Could Allow Remote Code Execution',
					department : '人資部門',
					handler : 'Leo',
					createDate : '17/03/01',
					expectedDate : '17/04/01',
					updateDate : '17/03/07',
					createtimes : '7',
					deadline : 'expiring'
				},
				{
					id : 2,
					weaknessid : 90093,
					status : '待複掃',
					device : '動態密碼系統AP Server更改IP網段',
					priority : 'Crit',
					IPandPort : '192.168.6.162',
					OSandVer : 'Windows 10',
					ticketName : 'MS15-011: Vulnerability in Group Policy Could Allow Remote Code Execution (3000483)',
					department : '人資部門',
					handler : 'Johnson',
					createDate : '17/03/01',
					expectedDate : '17/04/01',
					updateDate : '17/03/08',
					createtimes : '8',
					deadline : ''
				},
				{
					id : 3,
					weaknessid : 90094,
					status : '待審核',
					device : 'ALM系統資料庫正式機建置需求-AP設計分析十組林宜賢',
					priority : 'Crit',
					IPandPort : '192.168.6.64',
					OSandVer : 'Windows XP',
					ticketName : 'MS KB3009008: Vulnerability in SSL 3.0 Could Allow Information Disclosure (POODLE)',
					department : '技術部門',
					handler : 'Will',
					createDate : '17/03/01',
					expectedDate : '17/04/10',
					updateDate : '17/03/11',
					createtimes : '4',
					deadline : 'expiring'
				},
				{
					id : 4,
					weaknessid : 90092,
					status : '待處理',
					device : 'AD與SSO同步用',
					priority : 'High',
					IPandPort : '192.168.6.12',
					OSandVer : 'Windows XP',
					ticketName : 'MS Security Advisory 2974294: Vulnerability in Microsoft Malware Protection Engine Could Allow Denial of Service',
					department : '研發部門',
					handler : 'Will',
					createDate : '17/03/01',
					expectedDate : '17/04/20',
					updateDate : '17/03/22',
					createtimes : '9',
					deadline : ''
				},
				{
					id : 5,
					weaknessid : 90095,
					status : '待複掃',
					device : 'ALM系統資料庫正式機建置需求-AP設計分析十組林宜賢',
					priority : 'Med',
					IPandPort : '192.168.6.64',
					OSandVer : 'Windows Vista',
					ticketName : 'MS KB3074162: Vulnerability in Microsoft Malicious Software Removal Tool Could Allow Elevation of Privilege',
					department : '技術部門',
					handler : 'Leo',
					createDate : '17/03/01',
					expectedDate : '17/04/17',
					updateDate : '17/03/08',
					createtimes : '6',
					deadline : ''
				},
				{
					id : 6,
					weaknessid : 90096,
					status : '待審核',
					device : 'AD與SSO同步用',
					priority : 'Med',
					IPandPort : '192.168.6.162',
					OSandVer : 'Windows 7',
					ticketName : 'MS15-124: Cumulative Security Update for Internet Explorer (3116180)',
					department : '研發部門',
					handler : 'Johnson',
					createDate : '17/03/01',
					expectedDate : '17/04/12',
					updateDate : '17/03/30',
					createtimes : '6',
					deadline : ''
				},
				{
					id : 7,
					weaknessid : 90097,
					status : '待處理',
					device : 'AD與SSO同步用',
					priority : 'Med',
					IPandPort : '10.102.254.136',
					OSandVer : 'Windows 8',
					ticketName : 'MS15-011: Vulnerability in Group Policy Could Allow Remote Code Execution (3000483)',
					department : '技術部門',
					handler : 'Leo',
					createDate : '17/03/01',
					expectedDate : '17/04/24',
					updateDate : '17/04/05',
					createtimes : '8',
					deadline : ''
				},
				{
					id : 8,
					weaknessid : 90098,
					status : '待審核',
					device : 'DB Audit 專案微軟 SQL Log 集中保存 Server',
					priority : 'Med',
					IPandPort : '192.168.6.64',
					OSandVer : 'Windows 7',
					ticketName : 'MS KB2719662: Vulnerabilities in Gadgets Could Allow Remote Code Execution',
					department : '研發部門',
					handler : 'Johnson',
					createDate : '17/03/01',
					expectedDate : '17/04/29',
					updateDate : '17/04/07',
					createtimes : '17',
					deadline : ''
				},
				{
					id : 9,
					weaknessid : 90099,
					status : '待處理',
					device : '動態密碼系統AP Server更改IP網段',
					priority : 'Med',
					IPandPort : '192.168.6.162',
					OSandVer : 'Windows 8',
					ticketName : 'MS KB2269637: Insecure Library Loading Could Allow Remote Code Execution',
					department : '人資部門',
					handler : 'Will',
					createDate : '17/03/01',
					expectedDate : '17/04/20',
					updateDate : '17/04/01',
					createtimes : '15',
					deadline : ''
				},
				{
					id : 10,
					weaknessid : 90010,
					status : '待複掃',
					device : 'DB Audit 專案微軟 SQL Log 集中保存 Server',
					priority : 'Med',
					IPandPort : '192.168.6.152',
					OSandVer : 'Windows 10',
					ticketName : 'Microsoft .NET Framework Unsupported',
					department : '技術部門',
					handler : 'Leo',
					createDate : '17/03/01',
					expectedDate : '17/04/13',
					updateDate : '17/03/27',
					createtimes : '1',
					deadline : ''
				},
				{
					id : 11,
					weaknessid : 90011,
					status : '待審核',
					device : '動態密碼系統AP Server更改IP網段',
					priority : 'Med',
					IPandPort : '10.102.254.136',
					OSandVer : 'Windows XP',
					ticketName : 'Microsoft Windowsdows - Users Information : Passwords Never Expire',
					department : '研發部門',
					handler : 'Johnson',
					createDate : '17/03/01',
					expectedDate : '17/04/18',
					updateDate : '17/03/22',
					createtimes : '3',
					deadline : ''
				},
				{
					id : 12,
					weaknessid : 90012,
					status : '待處理',
					device : 'KM正式機使用',
					priority : 'Med',
					IPandPort : '10.102.254.136',
					OSandVer : 'Windows XP',
					ticketName : 'Microsoft Windowsdows - Local Users Information : User Has Never Logged In',
					department : '人資部門',
					handler : 'Johnson',
					createDate : '17/03/01',
					expectedDate : '17/04/10',
					updateDate : '17/03/25',
					createtimes : '12',
					deadline : ''
				},
				{
					id : 13,
					weaknessid : 90013,
					status : '待複掃',
					device : 'ALM系統資料庫正式機建置需求-AP設計分析十組林宜賢',
					priority : 'Med',
					IPandPort : '192.168.6.152',
					OSandVer : 'Windows Vista',
					ticketName : 'Microsoft Windowsdows - Users Information : Never Changed Password',
					department : '研發部門',
					handler : 'Leo',
					createDate : '17/03/01',
					expectedDate : '17/04/07',
					updateDate : '17/03/10',
					createtimes : '7',
					deadline : ''
				},
				{
					id : 14,
					weaknessid : 90014,
					status : '待審核',
					device : 'KM正式機使用',
					priority : 'Med',
					IPandPort : '192.168.6.12',
					OSandVer : 'Windows 10',
					ticketName : 'Microsoft Windowsdows SMB NativeLanManager Remote System Information Disclosure',
					department : '技術部門',
					handler : 'Will',
					createDate : '17/03/01',
					expectedDate : '17/04/07',
					updateDate : '17/03/18',
					createtimes : '9',
					deadline : ''
				},
				{
					id : 15,
					weaknessid : 90015,
					status : '待複掃',
					device : 'ALM系統資料庫正式機建置需求-AP設計分析十組林宜賢',
					priority : 'Med',
					IPandPort : '192.168.6.152',
					OSandVer : 'Windows 8',
					ticketName : 'Microsoft Windowsdows SMB LsaQueryInformationPolicy Function NULL Session Domain SID Enumeration',
					department : '人資部門',
					handler : 'Leo',
					createDate : '17/03/01',
					expectedDate : '17/04/05',
					updateDate : '17/03/19',
					createtimes : '10',
					deadline : 'overdue'
				} ];

		$scope.priorityClassMapping = {
				Crit : 'Critical',
				High : 'High',
				Med : 'Medium',
				Low : 'Low',
				Info : 'Info'
		};
		
		// setting.html的資料
		$scope.data = {
			department : [ '人資部門', '技術部門', '研發部門' ],
			device : [ 'ALM系統資料庫正式機建置需求-AP設計分析十組林宜賢', 'KM正式機使用',
					'動態密碼系統AP Server更改IP網段',
					'DB Audit 專案微軟 SQL Log 集中保存 Server', 'AD與SSO同步用' ],
			IPandPort : [ '192.168.6.152', '192.168.6.12', '192.168.6.162',
					'192.168.6.64', '10.102.254.136' ],
			handler : [ 'Johnson', 'Leo', 'Will' ],
			OSandVer : [ 'Windows XP', 'Windows Vista', 'Windows 7',
					'Windows 8', 'Windows 10' ],
			status : [ '待處理', '待審核', '待複掃' ],
			priority : [ 'Crit', 'High', 'Med', 'Low' ]
		};
		// 人員資料
		$scope.peopleTableData = [ {
			id : 1,
			firstName : 'Mark',
			lastName : 'Otto',
			username : '@mdo',
			email : 'mdo@gmail.com',
			age : '28',
			department : 'Human Resources Department'
		}, {
			id : 2,
			firstName : 'Jacob',
			lastName : 'Thornton',
			username : '@fat',
			email : 'fat@yandex.ru',
			age : '45',
			status : 'primary',
			department : 'Technolog Department'
		}, {
			id : 3,
			firstName : 'Larry',
			lastName : 'Bird',
			username : '@twitter',
			email : 'twitter@outlook.com',
			age : '18',
			department : 'Technolog Department'
		}, {
			id : 4,
			firstName : 'John',
			lastName : 'Snow',
			username : '@snow',
			email : 'snow@gmail.com',
			age : '20',
			department : 'Human Resources Department'
		}, {
			id : 5,
			firstName : 'Jack',
			lastName : 'Sparrow',
			username : '@jack',
			email : 'jack@yandex.ru',
			age : '30',
			department : 'Research and Development Department'
		} ];

	}
})();
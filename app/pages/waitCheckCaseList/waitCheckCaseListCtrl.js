(function () {
  'use strict';

  angular.module('BlurAdmin.pages.waitCheckCaseList')
    .controller('waitCheckCaseListCtrl', waitCheckCaseListCtrl);

  /** @ngInject */
  function waitCheckCaseListCtrl($scope, $timeout, $uibModal) { 
	  //每頁比數
	  $scope.checkingListSize = 10;
	  
	  //button切換class
	  $scope.otherButton="btn btn-default";
	  $scope.selectedButton="btn btn-info"; 
	  $scope.viewRisk = "all";
      //權限按鈕事件
      $scope.changeCheck=function(num){
    	  $scope.viewRisk=num;
      }
      //button切換class

	  $scope.editorMode2 = true;
	  $scope.viewMode2 = false;
	  $scope.redirectToggle = false;
	  
	  $scope.toggleSetting = function() {
		  $scope.editorMode2 = !$scope.editorMode2;
		  $scope.viewMode2 = !$scope.viewMode2;
	  }
	  $scope.statusMapping = {
			  danger: 'Critical', 
			  warning: 'High'
	  };
	  
	  $scope.typeMapping = {
			  all: '', 
			  accept: '風險接受',
			  adjust: '風險調整',
			  goal: '風險展延',
	  };
	  
	  $scope.batchMode = true;
	  $scope.toggleBatchMode = function() {
		  $scope.batchMode = !$scope.batchMode;
		  console.log($scope.batchMode);
	  }
	  
	  $scope.addCondition = function() {
		  var html =''+ 	
		  '<div class="form-group" class="col-md-12">' +
		  '    <label class="col-md-2 control-label"></label>' +
		  '    <div class="col-md-2">' +
		  '        <div class="col-form-item">' +
		  '            <select class="form-control selectpicker">' +
		  '                <option>狀態</option>' +
		  '            </select>' +
		  '        </div>' +
		  '    </div>' +
		  '    <div class="col-md-2">' +
		  '        <div class="col-form-item">' +
		  '            <select class="form-control selectpicker">' +
		  '                <option>等於</option>' +
		  '            </select>' +
		  '        </div>' +
		  '    </div>' +
		  '    <div class="col-md-2">' +
		  '        <div class="col-form-group">' +
		  '            <select class="form-control selectpicker">' +
		  '                <option>處理中</option>' +
		  '                <option>已完成</option>' +
		  '                <option>待分派</option>' +
		  '            </select>' +
		  '        </div>' +
		  '    </div>' +
		  '</div>'
		  var conditionRow = angular.element(html);
		  var conditionBlock = $('#conditionBlock');
		  conditionBlock.append(conditionRow);
	  }
	  
	  $scope.clickRow = function(status) {
//		  if(status==="風險接受"){
			  location.href = '#/riskToLongGoal';
//		  }else if (status==="風險調整"){	  
//			  location.href = '#/riskAdjust';
//		  }
//		  $scope.redirectDetail();
//		  if (!$scope.batchMode) {
//			  location.href = '#/workOrderDetail';
//		  } else {
//			  var onClickRow = document.getElementById('inlineCheckbox' + id);
//			  onClickRow.checked = !onClickRow.checked;
//			  $scope.redirectToggle = true;
//		  }
	  };
	  
//	  $scope.redirectDetail = function(type) {
//		  if(type=""){
//			  location.href = '#/riskAcceptance';
//		  }
//		  
//	  }
	  
	// 嚴重危險群展示資料
		$scope.criticalTicket = [
				{
					id : 1,
					weaknessid : 90091,
					status : '處理中',
					device : '動態密碼系統AP Server更改IP網段',
					priority : 'Critical',
					IPandPort : '192.168.15.43:8081',
					OSandVer : 'Windows 8',
					ticketName : 'MS KB2269637: Insecure Library Loading Could Allow Remote Code Execution',
					department : '人資部門',
					handler : 'Leo',
					createDate : '17/03/01',
					expectedDate : '17/04/01',
					updateDate : '17/03/07',
					createtimes : 7,
					deadline : 'expiring'
				},
				{
					id : 2,
					weaknessid : 90093,
					status : '處理中',
					device : '動態密碼系統AP Server更改IP網段',
					priority : 'Critical',
					IPandPort : '192.168.15.43:8083',
					OSandVer : 'Windows 10',
					ticketName : 'MS15-011: Vulnerability in Group Policy Could Allow Remote Code Execution (3000483)',
					department : '人資部門',
					handler : 'Johnson',
					createDate : '17/03/01',
					expectedDate : '17/04/01',
					updateDate : '17/03/08',
					createtimes : 8,
					deadline : ''
				},
				{
					id : 3,
					weaknessid : 90094,
					status : '處理中',
					device : 'ALM系統資料庫正式機建置需求-AP設計分析十組林宜賢',
					priority : 'Critical',
					IPandPort : '192.168.15.43:8082',
					OSandVer : 'Windows XP',
					ticketName : 'MS KB3009008: Vulnerability in SSL 3.0 Could Allow Information Disclosure (POODLE)',
					department : '技術部門',
					handler : 'Will',
					createDate : '17/03/01',
					expectedDate : '17/04/10',
					updateDate : '17/03/11',
					createtimes : 4,
					deadline : 'expiring'
				},
				{
					id : 4,
					weaknessid : 90092,
					status : '處理中',
					device : 'AD與SSO同步用',
					priority : 'High',
					IPandPort : '192.168.15.43:8085',
					OSandVer : 'Windows XP',
					ticketName : 'MS Security Advisory 2974294: Vulnerability in Microsoft Malware Protection Engine Could Allow Denial of Service',
					department : '研發部門',
					handler : 'Will',
					createDate : '17/03/01',
					expectedDate : '17/04/20',
					updateDate : '17/03/22',
					createtimes : 9,
					deadline : ''
				},
				{
					id : 5,
					weaknessid : 90095,
					status : '處理中',
					device : 'ALM系統資料庫正式機建置需求-AP設計分析十組林宜賢',
					priority : 'Medium',
					IPandPort : '192.168.15.43:8085',
					OSandVer : 'Windows Vista',
					ticketName : 'MS KB3074162: Vulnerability in Microsoft Malicious Software Removal Tool Could Allow Elevation of Privilege',
					department : '技術部門',
					handler : 'Leo',
					createDate : '17/03/01',
					expectedDate : '17/04/17',
					updateDate : '17/03/08',
					createtimes : 6,
					deadline : ''
				},
				{
					id : 6,
					weaknessid : 90096,
					status : '處理中',
					device : 'AD與SSO同步用',
					priority : 'Medium',
					IPandPort : '192.168.15.43:8084',
					OSandVer : 'Windows 7',
					ticketName : 'MS15-124: Cumulative Security Update for Internet Explorer (3116180)',
					department : '研發部門',
					handler : 'Johnson',
					createDate : '17/03/01',
					expectedDate : '17/04/12',
					updateDate : '17/03/30',
					createtimes : 6,
					deadline : ''
				},
				{
					id : 7,
					weaknessid : 90097,
					status : '處理中',
					device : 'AD與SSO同步用',
					priority : 'Medium',
					IPandPort : '192.168.15.43:8083',
					OSandVer : 'Windows 8',
					ticketName : 'MS15-011: Vulnerability in Group Policy Could Allow Remote Code Execution (3000483)',
					department : '技術部門',
					handler : 'Leo',
					createDate : '17/03/01',
					expectedDate : '17/04/24',
					updateDate : '17/04/05',
					createtimes : 8,
					deadline : ''
				},
				{
					id : 8,
					weaknessid : 90098,
					status : '處理中',
					device : 'DB Audit 專案微軟 SQL Log 集中保存 Server',
					priority : 'Medium',
					IPandPort : '192.168.15.43:8082',
					OSandVer : 'Windows 7',
					ticketName : 'MS KB2719662: Vulnerabilities in Gadgets Could Allow Remote Code Execution',
					department : '研發部門',
					handler : 'Johnson',
					createDate : '17/03/01',
					expectedDate : '17/04/29',
					updateDate : '17/04/07',
					createtimes : 14,
					deadline : ''
				},
				{
					id : 9,
					weaknessid : 90099,
					status : '處理中',
					device : '動態密碼系統AP Server更改IP網段',
					priority : 'Medium',
					IPandPort : '192.168.15.43:8082',
					OSandVer : 'Windows 8',
					ticketName : 'MS KB2269637: Insecure Library Loading Could Allow Remote Code Execution',
					department : '人資部門',
					handler : 'Will',
					createDate : '17/03/01',
					expectedDate : '17/04/20',
					updateDate : '17/04/01',
					createtimes : 13,
					deadline : ''
				},
				{
					id : 10,
					weaknessid : 90010,
					status : '處理中',
					device : 'DB Audit 專案微軟 SQL Log 集中保存 Server',
					priority : 'Medium',
					IPandPort : '192.168.15.43:8081',
					OSandVer : 'Windows 10',
					ticketName : 'Microsoft .NET Framework Unsupported',
					department : '技術部門',
					handler : 'Leo',
					createDate : '17/03/01',
					expectedDate : '17/04/13',
					updateDate : '17/03/27',
					createtimes : 1,
					deadline : ''
				},
				{
					id : 11,
					weaknessid : 90011,
					status : '處理中',
					device : '動態密碼系統AP Server更改IP網段',
					priority : 'Medium',
					IPandPort : '192.168.15.43:8081',
					OSandVer : 'Windows XP',
					ticketName : 'Microsoft Windowsdows - Users Information : Passwords Never Expire',
					department : '研發部門',
					handler : 'Johnson',
					createDate : '17/03/01',
					expectedDate : '17/04/18',
					updateDate : '17/03/22',
					createtimes : 3,
					deadline : ''
				},
				{
					id : 12,
					weaknessid : 90012,
					status : '處理中',
					device : 'KM正式機使用',
					priority : 'Medium',
					IPandPort : '192.168.15.43:8084',
					OSandVer : 'Windows XP',
					ticketName : 'Microsoft Windowsdows - Local Users Information : User Has Never Logged In',
					department : '人資部門',
					handler : 'Johnson',
					createDate : '17/03/01',
					expectedDate : '17/04/10',
					updateDate : '17/03/25',
					createtimes : 16,
					deadline : ''
				},
				{
					id : 13,
					weaknessid : 90013,
					status : '處理中',
					device : 'ALM系統資料庫正式機建置需求-AP設計分析十組林宜賢',
					priority : 'Medium',
					IPandPort : '192.168.15.43:8084',
					OSandVer : 'Windows Vista',
					ticketName : 'Microsoft Windowsdows - Users Information : Never Changed Password',
					department : '研發部門',
					handler : 'Leo',
					createDate : '17/03/01',
					expectedDate : '17/04/07',
					updateDate : '17/03/10',
					createtimes : 7,
					deadline : ''
				},
				{
					id : 14,
					weaknessid : 90014,
					status : '處理中',
					device : 'KM正式機使用',
					priority : 'Medium',
					IPandPort : '192.168.15.43:8082',
					OSandVer : 'Windows 10',
					ticketName : 'Microsoft Windowsdows SMB NativeLanManager Remote System Information Disclosure',
					department : '技術部門',
					handler : 'Will',
					createDate : '17/03/01',
					expectedDate : '17/04/07',
					updateDate : '17/03/18',
					createtimes : 9,
					deadline : ''
				},
				{
					id : 15,
					weaknessid : 90015,
					status : '處理中',
					device : 'ALM系統資料庫正式機建置需求-AP設計分析十組林宜賢',
					priority : 'Medium',
					IPandPort : '192.168.15.43:8083',
					OSandVer : 'Windows 8',
					ticketName : 'Microsoft Windowsdows SMB LsaQueryInformationPolicy Function NULL Session Domain SID Enumeration',
					department : '人資部門',
					handler : 'Leo',
					createDate : '17/03/01',
					expectedDate : '17/04/05',
					updateDate : '17/03/19',
					createtimes : 11,
					deadline : 'overdue'
				} ];
      

	  
  }})();
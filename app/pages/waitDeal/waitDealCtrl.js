(function() {
	'use strict';

	angular.module('BlurAdmin.pages.waitDeal').controller('waitDealCtrl',
			waitDealCtrl);

	/** @ngInject */
	function waitDealCtrl($scope) {
		$scope.createDate = "";

		// 將畫面重導致弱點細項畫面
		$scope.clickRow = function(id) {
			location.href = '#/workOrderDetail';
		};

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
					createtimes : 17,
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
					createtimes : 15,
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
					createtimes : 12,
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
					createtimes : 10,
					deadline : 'overdue'
				} ];

		// 人員資料
		$scope.peopleTableData = [{
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
			status : 'primary'
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
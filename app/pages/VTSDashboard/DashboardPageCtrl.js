/**
 * @author v.lugovsky created on 16.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.VTSDashboard').controller(
			'DashboardPageCtrl', DashboardPageCtrl);

	/** @ngInject */
	function DashboardPageCtrl($scope, $filter) {

		$scope.labels = [ "即將逾期弱點", "已逾期弱點", "其餘待處理弱點" ];
		$scope.data = [ 7, 4, 21 ];
		$scope.options = {
			segmentShowStroke : false
		};
		
		
		$scope.$watch(function() {
			$scope.dashboardHeight=angular.element('#expiringDiv').height();
			$scope.chartHeight=$scope.dashboardHeight*0.8;
			$scope.chartWidth=$scope.chartHeight*2;
        }, true);
		
		$scope.ExpiringTableData = [
				{
					serverity : 'Critical',
					id : '100101',
					owner : 'Jay',
					Name : 'MS KB2269637: Insecure Library Loading Could Allow Remote Code Execution',
					deadline : '17/03/03',
				},
				{
					serverity : 'Critical',
					id : '10102',
					owner : 'Jay',
					Name : 'MS15-011: Vulnerability in Group Policy Could Allow Remote Code Execution (3000483)',
					deadline : '17/03/03',
				},
				{
					serverity : 'Critical',
					id : '10103',
					owner : 'Jay',
					Name : 'MS KB2269637: Insecure Library Loading Could Allow Remote Code Execution',
					deadline : '17/03/04',
				},
				{
					serverity : 'High',
					id : '10104',
					owner : 'Jay',
					Name : 'MS15-124: Cumulative Security Update for Internet Explorer (3116180)',
					deadline : '17/03/03',
				} ];
		$scope.ExpireTableData = [
				{
					serverity : 'Critical',
					id : '10094',
					owner : 'Jay',
					Name : 'MS KB3009008: Vulnerability in SSL 3.0 Could Allow Information Disclosure (POODLE)',
					deadline : '17/02/27',
				},
				{
					serverity : 'Critical',
					id : '10092',
					owner : 'Jay',
					Name : 'MS15-124: Cumulative Security Update for Internet Explorer (3116180)',
					deadline : '17/02/28',
				},
				{
					serverity : 'Critical',
					id : '10096',
					owner : 'Jay',
					Name : 'MS KB3074162: Vulnerability in Microsoft Malicious Software Removal Tool Could Allow Elevation of Privilege',
					deadline : '17/02/28',
				},
				{
					serverity : 'High',
					id : '10098',
					owner : 'Jay',
					Name : 'MS Security Advisory 2974294: Vulnerability in Microsoft Malware Protection Engine Could Allow Denial of Service',
					deadline : '17/03/01',
				} ];
		$scope.newTableData = [
				{
					serverity : 'Critical',
					id : '10094',
					owner : 'Jay',
					Name : 'MS15-011: Vulnerability in Group Policy Could Allow Remote Code Execution (3000483)',
					deadline : '17/03/05',
				},
				{
					serverity : 'Critical',
					id : '10092',
					owner : 'Jay',
					Name : 'MS KB3074162: Vulnerability in Microsoft Malicious Software Removal Tool Could Allow Elevation of Privilege',
					deadline : '17/03/05',
				},
				{
					serverity : 'Critical',
					id : '10096',
					owner : 'Jay',
					Name : 'MS KB3009008: Vulnerability in SSL 3.0 Could Allow Information Disclosure (POODLE)',
					deadline : '17/03/05',
				},
				{
					serverity : 'High',
					id : '10098',
					owner : 'Jay',
					Name : 'MS Security Advisory 2974294: Vulnerability in Microsoft Malware Protection Engine Could Allow Denial of Service',
					deadline : '17/03/06',
				}, ];

	}
})();

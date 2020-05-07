/**
 * @author v.lugovsky created on 16.12.2015
 */
(function() {
	'use strict';

	angular.module(
			'BlurAdmin.pages',
			[ 'ui.router',

			'BlurAdmin.pages.VTSDashboard', 'BlurAdmin.pages.waitDeal',
					'BlurAdmin.pages.waitCheckList',
					'BlurAdmin.pages.searchCase',
					'BlurAdmin.pages.searchRisk',
					'BlurAdmin.pages.riskAcceptanceApply',
					'BlurAdmin.pages.riskAcceptance',
					'BlurAdmin.pages.riskSigningApply',
					'BlurAdmin.pages.riskAdjust',
					'BlurAdmin.pages.riskToLongGoal',
					'BlurAdmin.pages.riskToLongGoalApply',
					'BlurAdmin.pages.waitRescanDeal',
					'BlurAdmin.pages.systemSetting',
					'BlurAdmin.pages.waitCheckCaseList',
					// 不顯示在左側的頁面
					'BlurAdmin.pages.workOrderDetail',
					'BlurAdmin.pages.riskAcceptance',
					// 不知道
					'BlurAdmin.pages.workOrderSetting',

			// 以下是火藥庫資料
			// 'BlurAdmin.pages.ui',
			// 'BlurAdmin.pages.components',
			// 'BlurAdmin.pages.form',
			// 'BlurAdmin.pages.tables',
			// 'BlurAdmin.pages.charts',
			// 'BlurAdmin.pages.maps',
			// 'BlurAdmin.pages.profile',
			// 'BlurAdmin.pages.datepicker',
			]).config(routeConfig);

	/** @ngInject */
	function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
		$urlRouterProvider.otherwise('/Dashboard');

		// 以下是火藥庫資料
		// baSidebarServiceProvider.addStaticItem({
		// title: 'Pages',
		// icon: 'ion-document',
		// subMenu: [{
		// title: 'Sign In',
		// fixedHref: 'auth.html',
		// blank: true
		// }, {
		// title: 'Sign Up',
		// fixedHref: 'reg.html',
		// blank: true
		// }, {
		// title: 'User Profile',
		// stateRef: 'profile'
		// }, {
		// title: '404 Page',
		// fixedHref: '404.html',
		// blank: true
		// }]
		// });
		// baSidebarServiceProvider.addStaticItem({
		// title: 'Menu Level 1',
		// icon: 'ion-ios-more',
		// subMenu: [{
		// title: 'Menu Level 1.1',
		// disabled: true
		// }, {
		// title: 'Menu Level 1.2',
		// subMenu: [{
		// title: 'Menu Level 1.2.1',
		// disabled: true
		// }]
		// }]
		// });
		//    

	}

})();
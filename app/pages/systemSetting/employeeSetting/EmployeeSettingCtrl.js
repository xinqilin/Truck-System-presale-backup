/**
 * @author v.lugovsky created on 16.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.systemSetting.employeeSetting').controller(
			'EmployeeSettingCtrl', EmployeeSettingCtrl);

	/** @ngInject */
	function EmployeeSettingCtrl($scope, $log, $uibModal) {
		$scope.selectEmployee = "";
		$scope.selected = '';
		$scope.roles = [ {
			val : '處理人員',
			checked : false
		}, {
			val : '主管',
			checked : false
		}, {
			val : '資安組',
			checked : false
		}, {
			val : '系統管理員',
			checked : false
		} ];
		// 打開設定頁面並抓取員工原本權限
		$scope.settingAuthority = function(size, employeeID) {
			var selectedEmployee;
			var modalInstance = $uibModal
					.open({
						animation : true,// 控制modal出現時是否有前置動畫
						templateUrl : 'app/pages/systemSetting/employeeSetting/adjustAuthority.html',// modal的url
						controller : 'authorityModalCtrl',// modal專用controller
						size : size,
						resolve : {// 設定要給設定頁面的資料
							roles : function() {
								var roles;
								angular.forEach($scope.peopleTableData,
										function(employee) {
											if (employee.id == employeeID) {
												selectedEmployee = employee;
												roles = employee.roles;
											}
										});
								return roles;
							}
						}
					});

			modalInstance.result.then(function(selectedRoleString) {// 當modal執行$uibModalInstance.close時會呼叫此函式
				if(!selectedRoleString==""){
					selectedEmployee.roleString = selectedRoleString;
				}else{
					selectedEmployee.roleString = "無";
				}
			}, function() {
				// $log.info('Modal dismissed at: ' + new Date());
			});
		};

		// 人員資料
		$scope.peopleTableData = [ {
			id : 10091,
			name : 'Mark Otto',
			username : '@mdo',
			email : 'mdo@gmail.com',
			age : '28',
			department : 'Human Resources Department',
			roles : [ {
				val : '處理人員',
				checked : false
			}, {
				val : '主管',
				checked : false
			}, {
				val : '資安組',
				checked : false
			}, {
				val : '系統管理員',
				checked : false
			} ],
			roleString : '無'
		}, {
			id : 10092,
			name : 'Jacob Thornton',
			username : '@fat',
			email : 'fat@yandex.ru',
			age : '45',
			status : 'primary',
			department : 'Technolog Department',
			roles : [ {
				val : '處理人員',
				checked : false
			}, {
				val : '主管',
				checked : false
			}, {
				val : '資安組',
				checked : false
			}, {
				val : '系統管理員',
				checked : false
			} ],
			roleString : '無'
		}, {
			id : 10093,
			name : 'Larry Bird',
			username : '@twitter',
			email : 'twitter@outlook.com',
			age : '18',
			department : 'Technolog Department',
			roles : [ {
				val : '處理人員',
				checked : false
			}, {
				val : '主管',
				checked : false
			}, {
				val : '資安組',
				checked : false
			}, {
				val : '系統管理員',
				checked : false
			} ],
			roleString : '無'
		}, {
			id : 10094,
			name : 'John Snow',
			username : '@snow',
			email : 'snow@gmail.com',
			age : '20',
			department : 'Human Resources Department',
			roles : [ {
				val : '處理人員',
				checked : false
			}, {
				val : '主管',
				checked : false
			}, {
				val : '資安組',
				checked : false
			}, {
				val : '系統管理員',
				checked : false
			} ],
			roleString : '無'
		}, {
			id : 10095,
			name : 'Jack Sparrow',
			username : '@jack',
			email : 'jack@yandex.ru',
			age : '30',
			department : 'Research and Development Department',
			roles : [ {
				val : '處理人員',
				checked : false
			}, {
				val : '主管',
				checked : false
			}, {
				val : '資安組',
				checked : false
			}, {
				val : '系統管理員',
				checked : false
			} ],
			roleString : '無'
		} ];
	}

	angular.module('BlurAdmin.pages.systemSetting.employeeSetting').controller(
			'authorityModalCtrl', function($scope, $uibModalInstance, roles) {
				$scope.roles = roles;
				$scope.showSelectedRole = "";

				$scope.click = function() {
					var result = "";
					angular.forEach($scope.roles, function(role) {
						if (role.checked)
							result = result+ "," +role.val;
					});
					result = result.substring(1, result.length);
					$scope.showSelectedRole = result;
				}

				$scope.ok = function() {
					// $ctrl.albumNameArray = [];
					$uibModalInstance.close($scope.showSelectedRole);
				};

				$scope.cancel = function() {
					$uibModalInstance.dismiss('cancel');
				};
			});

})();

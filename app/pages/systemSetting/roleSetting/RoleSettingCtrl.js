/**
 * @author v.lugovsky created on 16.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.systemSetting.roleSetting').controller(
			'RoleSettingCtrl', RoleSettingCtrl);

	/** @ngInject */
	function RoleSettingCtrl($scope, $uibModal) {
		$scope.selectRole = false;
		$scope.selectRoleName = "";
		$scope.isEditing = false;
		$scope.context = {};
		$scope.otherButton = "btn btn-default";
		$scope.selectedButton = "btn btn-success";
		$scope.isShowDeleteButton = false;
		$scope.showButtonIcon = "fa fa-edit";
		$scope.nextNum = 0;

		// 案刪除時，開啟doublecheckModal
		$scope.doublecheck = function(role, size) {
			var modalInstance = $uibModal
					.open({
						animation : true,// 控制modal出現時是否有前置動畫
						templateUrl : 'app/pages/systemSetting/roleSetting/doubleCheckModal.html',// modal的url
						controller : 'doubleCheckModalCtrl',// modal專屬Controller
						size : size,
						resolve : {// 準備Modal需要的變數
							role : function() {
								return role;
							}
						}
					});

			modalInstance.result.then(function(deletedrole) {// 當modal呼叫$uibModalInstance.close()時，執行此區塊
				$scope.deleteRole(deletedrole);
			}, function() {
				// $log.info('Modal dismissed at: ' + new Date());
			});
		}

		// Enter觸發事件
		$scope.pressEnter = function($event) {
			if ($event.which !== 13) {
				return;
			} else {
				$scope.addNewRole()
			}
		};

		// 每一列的點擊事件，將右邊Table開頭改為稱謂名稱，並隨機設定權限
		$scope.changeTableDetails = function(name) {
			var i = 0;
			$scope.selectRoleName = name;
			$scope.selectRole = true;
			//隨機給予true/false
			for (i = 0; i < $scope.ComponentTableData.length; i++) {
				var ran = Math.random();
				if (ran > 0.5) {
					$scope.ComponentTableData[i].check = true;
				} else {
					$scope.ComponentTableData[i].check = false;
				}
			}

		};

		// 刪除角色事件
		$scope.deleteRole = function(deletedrole) {
			var index = $scope.RoleTableData.indexOf(deletedrole);
			$scope.RoleTableData.splice(index, 1);
			// 順序重排
			$scope.resetRoleTableDataNum();
		};

		// 權限按鈕事件
		$scope.changeCheck = function(id, num) {
			$scope.ComponentTableData[id - 1].check = num;
		}

		// 設定是否要顯示角色刪除紐
		$scope.showDeleteButton = function() {
			$scope.isShowDeleteButton = !$scope.isShowDeleteButton;
			if ($scope.isShowDeleteButton) {
				$scope.showButtonIcon = "ion-reply";
			} else {
				$scope.showButtonIcon = "fa fa-edit";
			}

			$scope.isEditing = !$scope.isEditing;
			$scope.selectRole = false;
		};

		// 新增按鈕事件
		$scope.addNewRole = function() {
			// 確保一定有值
			if (angular.isUndefined($scope.context.inputNewRole)
					|| $scope.context.inputNewRole == "") {
				return;
			}
			// 新增
			var num = $scope.RoleTableData.length + 1;
			var newRole = {
				num : num,
				name : $scope.context.inputNewRole
			};
			$scope.RoleTableData.push(newRole);
			// 清空inputtext
			delete $scope.context.inputNewRole;
		};

		// 監聽RoleTableData，如果有變化更改$scope.nextNum
		$scope.$watch('RoleTableData', function() {
			$scope.nextNum = $scope.RoleTableData.length + 1;
		}, true)

		// 清除右頁面
		$scope.dismiss = function() {
			$scope.selectRole = false;
		}

		// 重製編號
		$scope.resetRoleTableDataNum = function() {
			var i = 1;
			for (i = 1; i <= $scope.RoleTableData.length; i++) {
				$scope.RoleTableData[i - 1].num = i;
			}
		};

		$scope.RoleTableData = [ {
			num : '1',
			name : '處理人員'
		}, {
			num : '2',
			name : '主管'
		}, {
			num : '3',
			name : '資安組'
		}, {
			num : '4',
			name : '系統管理員'
		} ];

		$scope.ComponentTableData = [ {
			id : 1,
			name : "Dashboard",
			check : null
		}, {
			id : 2,
			name : "休假申請",
			check : null
		}, 
		{
			id : 3,
			name : "休假查詢",
			check : null
		},
		//  {
		// 	id : 4,
		// 	name : "展延待審核",
		// 	check : null
		// }, {
		// 	id : 5,
		// 	name : "弱點查詢",
		// 	check : null
		// }, {
		// 	id : 6,
		// 	name : "風險簽核申請",
		// 	check : null
		// }, {
		// 	id : 7,
		// 	name : "通知設定",
		// 	check : null
		// }, {
		// 	id : 8,
		// 	name : "系統設定",
		// 	check : null
		// }, {
		// 	id : 9,
		// 	name : "待復掃清單",
		// 	check : null
		// }
	 ];
	}

	// 給doubleCheckModal準備專屬Controller
	angular.module('BlurAdmin.pages.systemSetting.employeeSetting').controller(
			'doubleCheckModalCtrl', function($scope, $uibModalInstance, role) {
				$scope.role = role;
				// 刪除按鈕觸發事件，按下後須回傳一個物件，父Controller接到後，執行delete()
				$scope.ok = function() {
					$uibModalInstance.close($scope.role);
				};
				// 取消事件
				$scope.cancel = function() {
					$uibModalInstance.dismiss('cancel');
				};
			});
})();

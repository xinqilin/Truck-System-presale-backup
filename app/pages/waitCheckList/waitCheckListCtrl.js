(function () {
  'use strict';

  angular.module('BlurAdmin.pages.waitCheckList')
    .controller('waitCheckListCtrl', waitCheckListCtrl);

  /** @ngInject */
  function waitCheckListCtrl($scope, $timeout, $uibModal) { 
	  	  		  
	  
	  //button切換class
	  $scope.otherButton = "btn btn-default";
	  $scope.selectedButton = "btn btn-info"; 
	  $scope.viewRisk = "all";
      //權限按鈕事件
      $scope.changeCheck = function(state){
    	  $scope.viewRisk = state;
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
      spe: 'Critical', 
      issue: 'High'
	  };
	  
	  $scope.typeMapping = {
			  all: '', 
			  accept: 'HY本部',
			  adjust: '板橋遠傳',
			  goal: '內湖遠傳',
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
		  if(status==="HY本部"){
			  location.href = '#/riskAcceptance';
		  }else if (status==="板橋遠傳"){	  
			  location.href = '#/riskAdjust';
		  }
//		  $scope.redirectDetail();
//		  if (!$scope.batchMode) {
//			  location.href = '#/workOrderDetail';
//		  } else {
//			  var onClickRow = document.getElementById('inlineCheckbox' + id);
//			  onClickRow.checked = !onClickRow.checked;
//			  $scope.redirectToggle = true;
//		  }
	  };
	  
	  
      $scope.criticalTicket = [
        {
          id: 1,
          pluginid : 'SD',
          firstName: 'Mark',
          lastName: '特休',
          username: '@mdo',
          email: 'mdo@gmail.com',
          age: '28',
          priority: '特休',
          status: 'HY本部',
          systemType: '網路銀行',
          ticketName: '出國玩',
          handler: 'Eric.Lee',
          createDate: '2020/07/01',
          expectedDate: '2020/09/01',
          updateDate: '2020/03/01'
        },
        {
          id: 2,
          pluginid : 'SA',
          firstName: 'Jacob',
          lastName: '支薪病假',
          username: '@fat',
          email: 'fat@yandex.ru',
          age: '45',
          priority: 'Critical',
          status: 'HY本部',
          systemType: '網路銀行',
          ticketName: '身體不舒服',
          handler: 'Evan.Hung',
          createDate: '2020/06/15',
          expectedDate: '2020/09/01',
          updateDate: '2020/03/01'
        },
        {
          id: 3,
          pluginid : 'SA',
          firstName: 'Larry',
          lastName: '事假',
          username: '@twitter',
          email: 'twitter@outlook.com',
          age: '18',
          priority: 'Critical',
          status: 'HY本部',
          systemType: '網路銀行',
          ticketName: '外訓',
          handler: 'Evan.Hung',
          createDate: '2020/06/15',
          expectedDate: '2020/10/01',
          updateDate: '2020/03/01'
        },
		{
          id: 4,
          pluginid : 'SD',
          firstName: 'Mark',
         lastName: '特休',
          username: '@mdo',
          email: 'mdo@gmail.com',
          age: '28',
          priority: 'High',
          status: 'HY本部',
          systemType: '網路銀行',
          ticketName: '外訓',
          handler: 'Evan.Hung',
          createDate: '2020/05/01',
          expectedDate: '2020/08/01',
          updateDate: '2020/03/01'
		},
        {
          id: 5,
          pluginid : 'PM',
          firstName: 'Jacob',
          lastName: '特休',
          username: '@fat',
          email: 'fat@yandex.ru',
          age: '45',
          priority: 'High',
          status: 'HY本部',
          systemType: '網路銀行',
          ticketName: '體檢',
          handler: 'Evan.Hung',
          createDate: '2020/05/01',
          expectedDate: '2020/08/01',
          updateDate: '2020/03/01'
        },
        {
          id: 6,
          pluginid : 'SD',
          firstName: 'Larry',
          lastName: '事假',
          username: '@twitter',
          email: 'twitter@outlook.com',
          age: '18',
          priority: 'High',
          status: 'HY本部',
          systemType: '網路銀行',
          ticketName: '不舒服，看醫生',
          handler: 'Evan.Hung',
          createDate: '2020/05/01',
          expectedDate: '2020/07/01',
          updateDate: '2020/03/01'
        },
        
	 ];
	   
      
     $scope.riskAdjustList = [
         {
             id: 1,
             pluginid : 'PG',
             firstName: 'Mark',
             lastName: '支薪病假',
             username: '@mdo',
             email: 'mdo@gmail.com',
             age: '28',
             priority: 'Critical',
             newpriority: 'Medium',
             status: '板橋遠傳',
             systemType: '網路銀行',
             ticketName: '出國玩',
             handler: 'Luke.Hung',
             createDate: '2020/07/01',
             expectedDate: '2020/09/01',
             updateDate: '2020/03/01'
           },
           {
             id: 2,
             pluginid : 'PG',
             firstName: 'Jacob',
             lastName: '特休',
             username: '@fat',
             email: 'fat@yandex.ru',
             age: '45',
             priority: 'Critical',
             newpriority: 'High',
             status: '板橋遠傳',
             systemType: '網路銀行',
             ticketName: '身體不舒服',
             handler: 'Luke.Hung',
             createDate: '2020/06/15',
             expectedDate: '2020/09/01',
             updateDate: '2020/03/01'
           },
           {
             id: 3,
             pluginid : 'PG',
             firstName: 'Larry',
             lastName: '事假',
             username: '@twitter',
             email: 'twitter@outlook.com',
             age: '18',
             priority: 'Critical',
             newpriority: 'Medium',
             status: '板橋遠傳',
             systemType: '網路銀行',
             ticketName: '外訓',
             handler: 'Evan.Hung',
             createDate: '2020/06/15',
             expectedDate: '2020/10/01',
             updateDate: '2020/03/01'
           },
   		{
             id: 4,
             pluginid : 'SA',
             firstName: 'Mark',
            lastName: '特休',
             username: '@mdo',
             email: 'mdo@gmail.com',
             age: '28',
             priority: 'High',
             newpriority: 'Medium',
             status: '板橋遠傳',
             systemType: '網路銀行',
             ticketName: '外訓',
             handler: 'Evan.Hung',
             createDate: '2020/05/01',
             expectedDate: '2020/08/01',
             updateDate: '2020/03/01'
   		},
           {
             id: 5,
             pluginid : 'PG',
             firstName: 'Jacob',
             lastName: '特休',
             username: '@fat',
             email: 'fat@yandex.ru',
             age: '45',
             priority: 'High',
             newpriority: 'Low',
             status: '板橋遠傳',
             systemType: '網路銀行',
             ticketName: '體檢',
             handler: 'Evan.Hung',
             createDate: '2020/05/01',
             expectedDate: '2020/08/01',
             updateDate: '2020/03/01'
           },
           {
             id: 6,
             pluginid : 'SA',
             firstName: 'Larry',
             lastName: '事假',
             username: '@twitter',
             email: 'twitter@outlook.com',
             age: '18',
             priority: 'High',
             newpriority: 'Medium',
             status: '板橋遠傳',
             systemType: '網路銀行',
             ticketName: '不舒服，看醫生',
             handler: 'Evan.Hung',
             createDate: '2020/05/01',
             expectedDate: '2020/07/01',
             updateDate: '2020/03/01'
           },
           {
               id: 7,
               pluginid : 'SD',
               firstName: 'Mark',
               lastName: '特休',
               username: '@mdo',
               email: 'mdo@gmail.com',
               age: '28',
               priority: 'Critical',
               newpriority: 'Medium',
               status: '板橋遠傳',
               systemType: '網路銀行',
               ticketName: '出國',
               handler: 'Evan.Hung',
               createDate: '2020/03/01',
               expectedDate: '2020/03/01',
               updateDate: '2020/03/01'
             },
            
             
  	 ];

     
     $scope.riskAll = [
         {
             id: 1,
             pluginid : 'PG',
             firstName: 'Mark',
             lastName: '支薪病假',
             username: '@mdo',
             email: 'mdo@gmail.com',
             age: '28',
             priority: 'Critical',
             newpriority: 'Medium',
             status: '板橋遠傳',
             systemType: '網路銀行',
             ticketName: '出國玩',
             handler: 'Evan.Hung',
             createDate: '2020/07/01',
             expectedDate: '2020/09/01',
             updateDate: '2020/03/01'
           },
           {
             id: 2,
             pluginid : 'SD',
             firstName: 'Jacob',
             lastName: '特休',
             username: '@fat',
             email: 'fat@yandex.ru',
             age: '45',
             priority: 'Critical',
             newpriority: 'High',
             status: '板橋遠傳',
             systemType: '網路銀行',
             ticketName: '身體不舒服',
             handler: 'Bill.Lin',
             createDate: '2020/06/15',
             expectedDate: '2020/09/01',
             updateDate: '2020/03/01'
           },
                  
             //HY本部
             {
                 id: 1,
                 pluginid : 'PM',
                 firstName: 'Mark',
                 lastName: '特休',
                 username: '@mdo',
                 email: 'mdo@gmail.com',
                 age: '28',
                 priority: 'Critical',
                 status: 'HY本部',
                 systemType: '網路銀行',
                 ticketName: 'Test  test',
                 handler: 'Kevin.Lee',
                 createDate: '2020/07/01',
                 expectedDate: '2020/09/01',
                 updateDate: '2020/03/01'
               },           
          {
             id: 4,
             pluginid : 'SA',
             firstName: 'Mark',
             lastName: '事假',
             username: '@mdo',
             email: 'mdo@gmail.com',
             age: '28',
             priority: 'High',
             newpriority: 'Medium',
             status: '板橋遠傳',
             systemType: '網路銀行',
             ticketName: '外訓',
             handler: 'Kevin.Lee',
             createDate: '2020/05/01',
             expectedDate: '2020/08/01',
             updateDate: '2020/03/01'
   		},
          
           
           //板橋遠傳
      
             {
               id: 8,
               pluginid : 'PG',
               firstName: 'Jacob',
               lastName: '特休',
               username: '@fat',
               email: 'fat@yandex.ru',
               age: '45',
               priority: 'Critical',
               newpriority: 'Low',
               status: '板橋遠傳',
               systemType: '網路銀行',
               ticketName: '照顧家人',
               handler: 'Kevin.Lee',
               createDate: '2020/03/01',
               expectedDate: '2020/03/01',
               updateDate: '2020/03/01'
             },
     
 
               //HY本部
               {
               id: 7,
               pluginid : 'PM',
               firstName: 'Mark',
               lastName: '事假',
               username: '@mdo',
               email: 'mdo@gmail.com',
               age: '28',
               priority: 'Critical',
               status: 'HY本部',
               systemType: '網路銀行',
               ticketName: '出國',
               handler: 'Eric.Lee',
               createDate: '2020/03/01',
               expectedDate: '2020/03/01',
               updateDate: '2020/03/01'
             },
             {
               id: 8,
               pluginid : 'PG',
               firstName: 'Jacob',
               lastName: '特休',
               username: '@fat',
               email: 'fat@yandex.ru',
               age: '45',
               priority: 'Critical',
               status: 'HY本部',
               systemType: '網路銀行',
               ticketName: '照顧家人',
               handler: 'Eric.Lee',
               createDate: '2020/03/01',
               expectedDate: '2020/03/01',
               updateDate: '2020/03/01'
             },
    
 	 ];     

	  
  }})();
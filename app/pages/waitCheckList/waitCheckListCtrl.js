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
			  Critical: 'Critical', 
			  High: 'High'
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
		  if(status==="風險接受"){
			  location.href = '#/riskAcceptance';
		  }else if (status==="風險調整"){	  
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
          pluginid : 12288,
          firstName: 'Mark',
          lastName: 'Otto',
          username: '@mdo',
          email: 'mdo@gmail.com',
          age: '28',
          priority: 'Critical',
          status: '風險接受',
          systemType: '網路銀行',
          ticketName: 'Global variable settings[checkbox]:Probe services on every port',
          handler: 'Eddie.Lee',
          createDate: '2017/07/01',
          expectedDate: '2017/09/01',
          updateDate: '2017/03/01'
        },
        {
          id: 2,
          pluginid : 10180,
          firstName: 'Jacob',
          lastName: 'Thornton',
          username: '@fat',
          email: 'fat@yandex.ru',
          age: '45',
          priority: 'Critical',
          status: '風險接受',
          systemType: '網路銀行',
          ticketName: 'Ping the remote host[checkbox]:Interpret ICMP unreach from gateway',
          handler: 'Eddie.Lee',
          createDate: '2017/06/15',
          expectedDate: '2017/09/01',
          updateDate: '2017/03/01'
        },
        {
          id: 3,
          pluginid : 10870,
          firstName: 'Larry',
          lastName: 'Bird',
          username: '@twitter',
          email: 'twitter@outlook.com',
          age: '18',
          priority: 'Critical',
          status: '風險接受',
          systemType: '網路銀行',
          ticketName: 'Login configurations[checkbox]:Never send SMB credentials in clear text',
          handler: 'Eddie.Lee',
          createDate: '2017/06/15',
          expectedDate: '2017/10/01',
          updateDate: '2017/03/01'
        },
		{
          id: 4,
          pluginid : 17351,
          firstName: 'Mark',
         lastName: 'Otto',
          username: '@mdo',
          email: 'mdo@gmail.com',
          age: '28',
          priority: 'High',
          status: '風險接受',
          systemType: '網路銀行',
          ticketName: 'Kerberos configuration[entry]:Kerberos KDC Port :',
          handler: 'Eddie.Lee',
          createDate: '2017/05/01',
          expectedDate: '2017/08/01',
          updateDate: '2017/03/01'
		},
        {
          id: 5,
          pluginid : 57029,
          firstName: 'Jacob',
          lastName: 'Thornton',
          username: '@fat',
          email: 'fat@yandex.ru',
          age: '45',
          priority: 'High',
          status: '風險接受',
          systemType: '網路銀行',
          ticketName: 'Patch Management: SCCM Server Settings[entry]:SCCM Username :',
          handler: 'Eddie.Lee',
          createDate: '2017/05/01',
          expectedDate: '2017/08/01',
          updateDate: '2017/03/01'
        },
        {
          id: 6,
          pluginid : 83189,
          firstName: 'Larry',
          lastName: 'Bird',
          username: '@twitter',
          email: 'twitter@outlook.com',
          age: '18',
          priority: 'High',
          status: '風險接受',
          systemType: '網路銀行',
          ticketName: 'OVAL Windows Compliance Checks[file]:Policy file #3 :',
          handler: 'Eddie.Lee',
          createDate: '2017/05/01',
          expectedDate: '2017/07/01',
          updateDate: '2017/03/01'
        },
        {
            id: 7,
            pluginid : 14273,
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            email: 'mdo@gmail.com',
            age: '28',
            priority: 'Critical',
            status: '風險接受',
            systemType: '網路銀行',
            ticketName: 'SSH settings[password]:Additional SSH password (4) :',
            handler: 'Eddie.Lee',
            createDate: '2017/03/01',
            expectedDate: '2017/03/01',
            updateDate: '2017/03/01'
          },
          {
            id: 8,
            pluginid : 66334,
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
            email: 'fat@yandex.ru',
            age: '45',
            priority: 'Critical',
            status: '風險接受',
            systemType: '網路銀行',
            ticketName: 'Patch Report[checkbox]:Display the superseded patches in the report',
            handler: 'Eddie.Lee',
            createDate: '2017/03/01',
            expectedDate: '2017/03/01',
            updateDate: '2017/03/01'
          },
          {
            id: 9,
            pluginid : 62680,
            firstName: 'Larry',
            lastName: 'Bird',
            username: '@twitter',
            email: 'twitter@outlook.com',
            age: '18',
            priority: 'Critical',
            status: '風險接受',
            systemType: '網路銀行',
            ticketName: 'Juniper Junos Compliance Checks[file]:Policy file #5 :',
            handler: 'Eddie.Lee',
            createDate: '2017/03/01',
            expectedDate: '2017/03/01',
            updateDate: '2017/03/01'
          },
  		{
            id: 10,
            pluginid : 86349,
            firstName: 'Mark',
           lastName: 'Otto',
            username: '@mdo',
            email: 'mdo@gmail.com',
            age: '28',
            priority: 'High',
            status: '風險接受',
            systemType: '網路銀行',
            ticketName: 'OpenStack Compliance Checks[file]:Policy file #4 :',
            handler: 'Eddie.Lee',
            createDate: '2017/01/11',
            expectedDate: '2017/02/01',
            updateDate: '2017/03/01'
  		},
          {
            id: 11,
            pluginid : 71842,
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
            email: 'fat@yandex.ru',
            age: '45',
            priority: 'High',
            status: '風險接受',
            systemType: '網路銀行',
            ticketName: 'Brocade FabricOS Compliance Checks[file]:Policy file #1 :',
            handler: 'Eddie.Lee',
            createDate: '2017/01/10',
            expectedDate: '2017/02/01',
            updateDate: '2017/03/01'
          },
          {
            id: 12,
            pluginid : 70469,
            firstName: 'Larry',
            lastName: 'Bird',
            username: '@twitter',
            email: 'twitter@outlook.com',
            age: '18',
            priority: 'High',
            status: '風險接受',
            systemType: '網路銀行',
            ticketName: 'FireEye Compliance Checks[file]:Policy file #2 :',
            handler: 'Eddie.Lee',
            createDate: '2016/12/26',
            expectedDate: '2017/02/01',
            updateDate: '2017/03/01'
          }
	 ];
	   
      
     $scope.riskAdjustList = [
         {
             id: 1,
             pluginid : 12288,
             firstName: 'Mark',
             lastName: 'Otto',
             username: '@mdo',
             email: 'mdo@gmail.com',
             age: '28',
             priority: 'Critical',
             newpriority: 'Medium',
             status: '風險調整',
             systemType: '網路銀行',
             ticketName: 'Global variable settings[checkbox]:Probe services on every port',
             handler: 'Eddie.Lee',
             createDate: '2017/07/01',
             expectedDate: '2017/09/01',
             updateDate: '2017/03/01'
           },
           {
             id: 2,
             pluginid : 10180,
             firstName: 'Jacob',
             lastName: 'Thornton',
             username: '@fat',
             email: 'fat@yandex.ru',
             age: '45',
             priority: 'Critical',
             newpriority: 'High',
             status: '風險調整',
             systemType: '網路銀行',
             ticketName: 'Ping the remote host[checkbox]:Interpret ICMP unreach from gateway',
             handler: 'Eddie.Lee',
             createDate: '2017/06/15',
             expectedDate: '2017/09/01',
             updateDate: '2017/03/01'
           },
           {
             id: 3,
             pluginid : 10870,
             firstName: 'Larry',
             lastName: 'Bird',
             username: '@twitter',
             email: 'twitter@outlook.com',
             age: '18',
             priority: 'Critical',
             newpriority: 'Medium',
             status: '風險調整',
             systemType: '網路銀行',
             ticketName: 'Login configurations[checkbox]:Never send SMB credentials in clear text',
             handler: 'Eddie.Lee',
             createDate: '2017/06/15',
             expectedDate: '2017/10/01',
             updateDate: '2017/03/01'
           },
   		{
             id: 4,
             pluginid : 17351,
             firstName: 'Mark',
            lastName: 'Otto',
             username: '@mdo',
             email: 'mdo@gmail.com',
             age: '28',
             priority: 'High',
             newpriority: 'Medium',
             status: '風險調整',
             systemType: '網路銀行',
             ticketName: 'Kerberos configuration[entry]:Kerberos KDC Port :',
             handler: 'Eddie.Lee',
             createDate: '2017/05/01',
             expectedDate: '2017/08/01',
             updateDate: '2017/03/01'
   		},
           {
             id: 5,
             pluginid : 57029,
             firstName: 'Jacob',
             lastName: 'Thornton',
             username: '@fat',
             email: 'fat@yandex.ru',
             age: '45',
             priority: 'High',
             newpriority: 'Low',
             status: '風險調整',
             systemType: '網路銀行',
             ticketName: 'Patch Management: SCCM Server Settings[entry]:SCCM Username :',
             handler: 'Eddie.Lee',
             createDate: '2017/05/01',
             expectedDate: '2017/08/01',
             updateDate: '2017/03/01'
           },
           {
             id: 6,
             pluginid : 83189,
             firstName: 'Larry',
             lastName: 'Bird',
             username: '@twitter',
             email: 'twitter@outlook.com',
             age: '18',
             priority: 'High',
             newpriority: 'Medium',
             status: '風險調整',
             systemType: '網路銀行',
             ticketName: 'OVAL Windows Compliance Checks[file]:Policy file #3 :',
             handler: 'Eddie.Lee',
             createDate: '2017/05/01',
             expectedDate: '2017/07/01',
             updateDate: '2017/03/01'
           },
           {
               id: 7,
               pluginid : 14273,
               firstName: 'Mark',
               lastName: 'Otto',
               username: '@mdo',
               email: 'mdo@gmail.com',
               age: '28',
               priority: 'Critical',
               newpriority: 'Medium',
               status: '風險調整',
               systemType: '網路銀行',
               ticketName: 'SSH settings[password]:Additional SSH password (4) :',
               handler: 'Eddie.Lee',
               createDate: '2017/03/01',
               expectedDate: '2017/03/01',
               updateDate: '2017/03/01'
             },
             {
               id: 8,
               pluginid : 66334,
               firstName: 'Jacob',
               lastName: 'Thornton',
               username: '@fat',
               email: 'fat@yandex.ru',
               age: '45',
               priority: 'Critical',
               newpriority: 'Low',
               status: '風險調整',
               systemType: '網路銀行',
               ticketName: 'Patch Report[checkbox]:Display the superseded patches in the report',
               handler: 'Eddie.Lee',
               createDate: '2017/03/01',
               expectedDate: '2017/03/01',
               updateDate: '2017/03/01'
             },
             {
               id: 9,
               pluginid : 62680,
               firstName: 'Larry',
               lastName: 'Bird',
               username: '@twitter',
               email: 'twitter@outlook.com',
               age: '18',
               priority: 'Critical',
               newpriority: 'High',
               status: '風險調整',
               systemType: '網路銀行',
               ticketName: 'Juniper Junos Compliance Checks[file]:Policy file #5 :',
               handler: 'Eddie.Lee',
               createDate: '2017/03/01',
               expectedDate: '2017/03/01',
               updateDate: '2017/03/01'
             },
     		{
               id: 10,
               pluginid : 86349,
               firstName: 'Mark',
              lastName: 'Otto',
               username: '@mdo',
               email: 'mdo@gmail.com',
               age: '28',
               priority: 'High',
               newpriority: 'Low',
               status: '風險調整',
               systemType: '網路銀行',
               ticketName: 'OpenStack Compliance Checks[file]:Policy file #4 :',
               handler: 'Eddie.Lee',
               createDate: '2017/01/11',
               expectedDate: '2017/02/01',
               updateDate: '2017/03/01'
     		},
             {
               id: 11,
               pluginid : 71842,
               firstName: 'Jacob',
               lastName: 'Thornton',
               username: '@fat',
               email: 'fat@yandex.ru',
               age: '45',
               priority: 'High',
               newpriority: 'Medium',
               status: '風險調整',
               systemType: '網路銀行',
               ticketName: 'Brocade FabricOS Compliance Checks[file]:Policy file #1 :',
               handler: 'Eddie.Lee',
               createDate: '2017/01/10',
               expectedDate: '2017/02/01',
               updateDate: '2017/03/01'
             },
             {
               id: 12,
               pluginid : 70469,
               firstName: 'Larry',
               lastName: 'Bird',
               username: '@twitter',
               email: 'twitter@outlook.com',
               age: '18',
               priority: 'High',
               newpriority: 'Medium',
               status: '風險調整',
               systemType: '網路銀行',
               ticketName: 'FireEye Compliance Checks[file]:Policy file #2 :',
               handler: 'Eddie.Lee',
               createDate: '2016/12/26',
               expectedDate: '2017/02/01',
               updateDate: '2017/03/01'
             },
             {
                 id: 13,
                 pluginid : 71842,
                 firstName: 'Jacob',
                 lastName: 'Thornton',
                 username: '@fat',
                 email: 'fat@yandex.ru',
                 age: '45',
                 priority: 'High',
                 newpriority: 'Medium',
                 status: '風險調整',
                 systemType: '網路銀行',
                 ticketName: 'Brocade FabricOS Compliance Checks[file]:Policy file #1 :',
                 handler: 'Eddie.Lee',
                 createDate: '2017/01/10',
                 expectedDate: '2017/02/01',
                 updateDate: '2017/03/01'
               },
               {
                 id: 14,
                 pluginid : 70469,
                 firstName: 'Larry',
                 lastName: 'Bird',
                 username: '@twitter',
                 email: 'twitter@outlook.com',
                 age: '18',
                 priority: 'High',
                 newpriority: 'Medium',
                 status: '風險調整',
                 systemType: '網路銀行',
                 ticketName: 'FireEye Compliance Checks[file]:Policy file #2 :',
                 handler: 'Eddie.Lee',
                 createDate: '2016/12/26',
                 expectedDate: '2017/02/01',
                 updateDate: '2017/03/01'
               }
  	 ];

     
     $scope.riskAll = [
         {
             id: 1,
             pluginid : 12288,
             firstName: 'Mark',
             lastName: 'Otto',
             username: '@mdo',
             email: 'mdo@gmail.com',
             age: '28',
             priority: 'Critical',
             newpriority: 'Medium',
             status: '風險調整',
             systemType: '網路銀行',
             ticketName: 'Global variable settings[checkbox]:Probe services on every port',
             handler: 'Eddie.Lee',
             createDate: '2017/07/01',
             expectedDate: '2017/09/01',
             updateDate: '2017/03/01'
           },
           {
             id: 2,
             pluginid : 10180,
             firstName: 'Jacob',
             lastName: 'Thornton',
             username: '@fat',
             email: 'fat@yandex.ru',
             age: '45',
             priority: 'Critical',
             newpriority: 'High',
             status: '風險調整',
             systemType: '網路銀行',
             ticketName: 'Ping the remote host[checkbox]:Interpret ICMP unreach from gateway',
             handler: 'Eddie.Lee',
             createDate: '2017/06/15',
             expectedDate: '2017/09/01',
             updateDate: '2017/03/01'
           },
           {
             id: 3,
             pluginid : 10870,
             firstName: 'Larry',
             lastName: 'Bird',
             username: '@twitter',
             email: 'twitter@outlook.com',
             age: '18',
             priority: 'Critical',
             newpriority: 'Medium',
             status: '風險調整',
             systemType: '網路銀行',
             ticketName: 'Login configurations[checkbox]:Never send SMB credentials in clear text',
             handler: 'Eddie.Lee',
             createDate: '2017/06/15',
             expectedDate: '2017/10/01',
             updateDate: '2017/03/01'
           },
      		{
               id: 4,
               pluginid : 17351,
               firstName: 'Mark',
              lastName: 'Otto',
               username: '@mdo',
               email: 'mdo@gmail.com',
               age: '28',
               priority: 'High',
               status: '風險接受',
               systemType: '網路銀行',
               ticketName: 'Kerberos configuration[entry]:Kerberos KDC Port :',
               handler: 'Eddie.Lee',
               createDate: '2017/05/01',
               expectedDate: '2017/08/01',
               updateDate: '2017/03/01'
     		},
             {
               id: 5,
               pluginid : 57029,
               firstName: 'Jacob',
               lastName: 'Thornton',
               username: '@fat',
               email: 'fat@yandex.ru',
               age: '45',
               priority: 'High',
               status: '風險接受',
               systemType: '網路銀行',
               ticketName: 'Patch Management: SCCM Server Settings[entry]:SCCM Username :',
               handler: 'Eddie.Lee',
               createDate: '2017/05/01',
               expectedDate: '2017/08/01',
               updateDate: '2017/03/01'
             },
             {
               id: 6,
               pluginid : 83189,
               firstName: 'Larry',
               lastName: 'Bird',
               username: '@twitter',
               email: 'twitter@outlook.com',
               age: '18',
               priority: 'High',
               status: '風險接受',
               systemType: '網路銀行',
               ticketName: 'OVAL Windows Compliance Checks[file]:Policy file #3 :',
               handler: 'Eddie.Lee',
               createDate: '2017/05/01',
               expectedDate: '2017/07/01',
               updateDate: '2017/03/01'
             },           
             //風險接受
             {
                 id: 1,
                 pluginid : 12288,
                 firstName: 'Mark',
                 lastName: 'Otto',
                 username: '@mdo',
                 email: 'mdo@gmail.com',
                 age: '28',
                 priority: 'Critical',
                 status: '風險接受',
                 systemType: '網路銀行',
                 ticketName: 'Global variable settings[checkbox]:Probe services on every port',
                 handler: 'Eddie.Lee',
                 createDate: '2017/07/01',
                 expectedDate: '2017/09/01',
                 updateDate: '2017/03/01'
               },           
          {
             id: 4,
             pluginid : 17351,
             firstName: 'Mark',
             lastName: 'Otto',
             username: '@mdo',
             email: 'mdo@gmail.com',
             age: '28',
             priority: 'High',
             newpriority: 'Medium',
             status: '風險調整',
             systemType: '網路銀行',
             ticketName: 'Kerberos configuration[entry]:Kerberos KDC Port :',
             handler: 'Eddie.Lee',
             createDate: '2017/05/01',
             expectedDate: '2017/08/01',
             updateDate: '2017/03/01'
   		},
           {
             id: 5,
             pluginid : 57029,
             firstName: 'Jacob',
             lastName: 'Thornton',
             username: '@fat',
             email: 'fat@yandex.ru',
             age: '45',
             priority: 'High',
             newpriority: 'Low',
             status: '風險調整',
             systemType: '網路銀行',
             ticketName: 'Patch Management: SCCM Server Settings[entry]:SCCM Username :',
             handler: 'Eddie.Lee',
             createDate: '2017/05/01',
             expectedDate: '2017/08/01',
             updateDate: '2017/03/01'
           },
           {
             id: 6,
             pluginid : 83189,
             firstName: 'Larry',
             lastName: 'Bird',
             username: '@twitter',
             email: 'twitter@outlook.com',
             age: '18',
             priority: 'High',
             newpriority: 'Medium',
             status: '風險調整',
             systemType: '網路銀行',
             ticketName: 'OVAL Windows Compliance Checks[file]:Policy file #3 :',
             handler: 'Eddie.Lee',
             createDate: '2017/05/01',
             expectedDate: '2017/07/01',
             updateDate: '2017/03/01'
           },
           
           //風險調整
           {
               id: 7,
               pluginid : 14273,
               firstName: 'Mark',
               lastName: 'Otto',
               username: '@mdo',
               email: 'mdo@gmail.com',
               age: '28',
               priority: 'Critical',
               newpriority: 'Medium',
               status: '風險調整',
               systemType: '網路銀行',
               ticketName: 'SSH settings[password]:Additional SSH password (4) :',
               handler: 'Eddie.Lee',
               createDate: '2017/03/01',
               expectedDate: '2017/03/01',
               updateDate: '2017/03/01'
             },
             {
               id: 8,
               pluginid : 66334,
               firstName: 'Jacob',
               lastName: 'Thornton',
               username: '@fat',
               email: 'fat@yandex.ru',
               age: '45',
               priority: 'Critical',
               newpriority: 'Low',
               status: '風險調整',
               systemType: '網路銀行',
               ticketName: 'Patch Report[checkbox]:Display the superseded patches in the report',
               handler: 'Eddie.Lee',
               createDate: '2017/03/01',
               expectedDate: '2017/03/01',
               updateDate: '2017/03/01'
             },
             {
               id: 9,
               pluginid : 62680,
               firstName: 'Larry',
               lastName: 'Bird',
               username: '@twitter',
               email: 'twitter@outlook.com',
               age: '18',
               priority: 'Critical',
               newpriority: 'High',
               status: '風險調整',
               systemType: '網路銀行',
               ticketName: 'Juniper Junos Compliance Checks[file]:Policy file #5 :',
               handler: 'Eddie.Lee',
               createDate: '2017/03/01',
               expectedDate: '2017/03/01',
               updateDate: '2017/03/01'
             },
     		{
               id: 10,
               pluginid : 86349,
               firstName: 'Mark',
              lastName: 'Otto',
               username: '@mdo',
               email: 'mdo@gmail.com',
               age: '28',
               priority: 'High',
               newpriority: 'Low',
               status: '風險調整',
               systemType: '網路銀行',
               ticketName: 'OpenStack Compliance Checks[file]:Policy file #4 :',
               handler: 'Eddie.Lee',
               createDate: '2017/01/11',
               expectedDate: '2017/02/01',
               updateDate: '2017/03/01'
     		},
             {
               id: 11,
               pluginid : 71842,
               firstName: 'Jacob',
               lastName: 'Thornton',
               username: '@fat',
               email: 'fat@yandex.ru',
               age: '45',
               priority: 'High',
               newpriority: 'Medium',
               status: '風險調整',
               systemType: '網路銀行',
               ticketName: 'Brocade FabricOS Compliance Checks[file]:Policy file #1 :',
               handler: 'Eddie.Lee',
               createDate: '2017/01/10',
               expectedDate: '2017/02/01',
               updateDate: '2017/03/01'
             },
             {
               id: 12,
               pluginid : 70469,
               firstName: 'Larry',
               lastName: 'Bird',
               username: '@twitter',
               email: 'twitter@outlook.com',
               age: '18',
               priority: 'High',
               newpriority: 'Medium',
               status: '風險調整',
               systemType: '網路銀行',
               ticketName: 'FireEye Compliance Checks[file]:Policy file #2 :',
               handler: 'Eddie.Lee',
               createDate: '2016/12/26',
               expectedDate: '2017/02/01',
               updateDate: '2017/03/01'
             },
             {
                 id: 13,
                 pluginid : 71842,
                 firstName: 'Jacob',
                 lastName: 'Thornton',
                 username: '@fat',
                 email: 'fat@yandex.ru',
                 age: '45',
                 priority: 'High',
                 newpriority: 'Medium',
                 status: '風險調整',
                 systemType: '網路銀行',
                 ticketName: 'Brocade FabricOS Compliance Checks[file]:Policy file #1 :',
                 handler: 'Eddie.Lee',
                 createDate: '2017/01/10',
                 expectedDate: '2017/02/01',
                 updateDate: '2017/03/01'
               },
               {
                 id: 14,
                 pluginid : 70469,
                 firstName: 'Larry',
                 lastName: 'Bird',
                 username: '@twitter',
                 email: 'twitter@outlook.com',
                 age: '18',
                 priority: 'High',
                 newpriority: 'Medium',
                 status: '風險調整',
                 systemType: '網路銀行',
                 ticketName: 'FireEye Compliance Checks[file]:Policy file #2 :',
                 handler: 'Eddie.Lee',
                 createDate: '2016/12/26',
                 expectedDate: '2017/02/01',
                 updateDate: '2017/03/01'
               },
               //風險接受
               {
               id: 7,
               pluginid : 14273,
               firstName: 'Mark',
               lastName: 'Otto',
               username: '@mdo',
               email: 'mdo@gmail.com',
               age: '28',
               priority: 'Critical',
               status: '風險接受',
               systemType: '網路銀行',
               ticketName: 'SSH settings[password]:Additional SSH password (4) :',
               handler: 'Eddie.Lee',
               createDate: '2017/03/01',
               expectedDate: '2017/03/01',
               updateDate: '2017/03/01'
             },
             {
               id: 8,
               pluginid : 66334,
               firstName: 'Jacob',
               lastName: 'Thornton',
               username: '@fat',
               email: 'fat@yandex.ru',
               age: '45',
               priority: 'Critical',
               status: '風險接受',
               systemType: '網路銀行',
               ticketName: 'Patch Report[checkbox]:Display the superseded patches in the report',
               handler: 'Eddie.Lee',
               createDate: '2017/03/01',
               expectedDate: '2017/03/01',
               updateDate: '2017/03/01'
             },
             {
               id: 9,
               pluginid : 62680,
               firstName: 'Larry',
               lastName: 'Bird',
               username: '@twitter',
               email: 'twitter@outlook.com',
               age: '18',
               priority: 'Critical',
               status: '風險接受',
               systemType: '網路銀行',
               ticketName: 'Juniper Junos Compliance Checks[file]:Policy file #5 :',
               handler: 'Eddie.Lee',
               createDate: '2017/03/01',
               expectedDate: '2017/03/01',
               updateDate: '2017/03/01'
             },
     		{
               id: 10,
               pluginid : 86349,
               firstName: 'Mark',
              lastName: 'Otto',
               username: '@mdo',
               email: 'mdo@gmail.com',
               age: '28',
               priority: 'High',
               status: '風險接受',
               systemType: '網路銀行',
               ticketName: 'OpenStack Compliance Checks[file]:Policy file #4 :',
               handler: 'Eddie.Lee',
               createDate: '2017/01/11',
               expectedDate: '2017/02/01',
               updateDate: '2017/03/01'
     		},
             {
               id: 11,
               pluginid : 71842,
               firstName: 'Jacob',
               lastName: 'Thornton',
               username: '@fat',
               email: 'fat@yandex.ru',
               age: '45',
               priority: 'High',
               status: '風險接受',
               systemType: '網路銀行',
               ticketName: 'Brocade FabricOS Compliance Checks[file]:Policy file #1 :',
               handler: 'Eddie.Lee',
               createDate: '2017/01/10',
               expectedDate: '2017/02/01',
               updateDate: '2017/03/01'
             },
             {
               id: 12,
               pluginid : 70469,
               firstName: 'Larry',
               lastName: 'Bird',
               username: '@twitter',
               email: 'twitter@outlook.com',
               age: '18',
               priority: 'High',
               status: '風險接受',
               systemType: '網路銀行',
               ticketName: 'FireEye Compliance Checks[file]:Policy file #2 :',
               handler: 'Eddie.Lee',
               createDate: '2016/12/26',
               expectedDate: '2017/02/01',
               updateDate: '2017/03/01'
             }
 	 ];     

	  
  }})();
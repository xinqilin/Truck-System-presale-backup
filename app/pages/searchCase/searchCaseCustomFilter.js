(function() {
	'use strict';

	angular.module('BlurAdmin.pages.searchCase').filter('customFilter', function() {
				return function (items,filterCondition,isFilterSetting) {
					var result=[];
					
					if (isFilterSetting) {
						angular.forEach(items,function(item){
							var createDate="20"+item.createDate;
							var expectedDate="20"+item.expectedDate;
							
							var itemcreateTime = new Date(createDate);
							var itemexpectedTime = new Date(expectedDate);

							var filter1 = (angular
									.isUndefined(filterCondition.Keyword) || filterCondition.Keyword == item.id);
							var filter2 = (angular
									.isUndefined(filterCondition.Status) || filterCondition.Status == item.status);
							var filter3 = (angular
									.isUndefined(filterCondition.CreateBeforeDate) || itemcreateTime
									- filterCondition.CreateBeforeDate >= 0);
							var filter4 = (angular
									.isUndefined(filterCondition.CreateAfterDate) || filterCondition.CreateAfterDate
									- itemcreateTime >= 0);
							var filter5 = (angular
									.isUndefined(filterCondition.Device) || filterCondition.Device == item.device);
							var filter6 = (angular
									.isUndefined(filterCondition.IPandPort) || filterCondition.IPandPort == item.IPandPort);
							var filter7 = (angular
									.isUndefined(filterCondition.Handler) || filterCondition.Handler == item.handler);
							var filter8 = (filterCondition.selectedOSandVer.length == 0 || filterCondition.selectedOSandVer
									.indexOf(item.OSandVer) !== -1);
							var filter9 = (angular
									.isUndefined(filterCondition.ExpectedBeforeDate) || itemexpectedTime
									- filterCondition.ExpectedBeforeDate >= 0);
							var filter10 = (angular
									.isUndefined(filterCondition.ExpectedAfterDate) || filterCondition.ExpectedAfterDate
									- itemexpectedTime >= 0);
							var filter11 = (angular
									.isUndefined(filterCondition.Priority) || filterCondition.Priority == item.priority);
//							 console.log("filter1:"+filter1);
//							 console.log("filter2:"+filter2);
//							 console.log("filter3:"+filter3);
//							 console.log("filter4:"+filter4);							 
//							 console.log("filter5:"+filter5);
//							 console.log("filter6:"+filter6);
//							 console.log("filter7:"+filter7);
//							console.log("filter8:" + filter8);
//							console.log("filter9:"+filter9);
//							 console.log("filter10:"+filter10);
//							 console.log("filter11:"+filter11);
							if(filter1 && filter2 && filter3 && filter4 && filter5
									&& filter6 && filter7 && filter8 && filter9 && filter10 && filter11){
								result.push(item);
							}//end of if
						});//end of forEach
						return result;
					} else {
						return items;
					}//end of elseif
						};
					});

})();
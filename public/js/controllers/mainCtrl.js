angular.module('todofoo').controller('mainCtrl', function($scope, mainSvc){

$scope.itemInput = '';

$scope.addItem = function(item){
  console.log(item);
  mainSvc.addItem(item)
 .then(function(res){
   getItems()
     console.log(res);
       });
};

var getItems = function(){
  console.log('running')
  mainSvc.getItems().then(function(res){
    console.log(res);
    $scope.items=res;
  });
};

$scope.updateItem = function(completed, title){
  $scope.item.completed = !completed;
  mainSvc.updateItem($scope.item.completed, title).then(function(res){
      console.log(res);
  });
};

$scope.deleteItem = function(title){
  mainSvc.deleteItem(title).then(function(res){
    console.log(res);
    getItems();
  });
};



getItems();

});

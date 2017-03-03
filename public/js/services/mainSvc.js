angular.module('todofoo').service('mainSvc', function($http){

  this.addItem = function(item){
    return $http({
      method: 'POST',
      url: '/addItem',
      data: {title: item}
    }).then(function(res){
      console.log(res.data);
      return res.data;
    });
  };

  this.getItems = function(){
    return $http({
      method: 'GET',
      url: '/items'
    }).then(function(res){
      console.log(res.data);
      return res.data;
    });
  };

  this.updateItem = function(completed){
    var item = {
      completed: completed,
      title: title
    };
    return $http({
      method: 'PUT',
      url: '/updateItem',
      data: item
    }).then(function(res){
      console.log(res.data);
      return res.data;
    });
  };

  this.deleteItem = function(title){
    return $http({
      method: 'DELETE',
      url: '/deleteItem',
      data: {title: title}
    }).then(function(res){
      console.log(res.data);
      return res.data;
    });
  };



});

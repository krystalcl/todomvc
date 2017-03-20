(function(angular) {
	'use strict';

	var myApp = angular.module('MyToDoMvc', []);

	myApp.controller('MainController', ['$scope', function($scope) {

		$scope.text = '';
		$scope.todos = [{
			id: 1,
			text: '学习',
			completed: false
		}, {
			id: 2,
			text: '睡觉',
			completed: false
		}, {
			id: 3,
			text: '打游戏',
			completed: true
		}, ];

		$scope.add = function() {
			$scope.todos.push({
				id: Math.random(),
				text: $scope.text,
				completed: false
			});
			$scope.text = '';
		};

		//删除
		$scope.remove = function(id){
			for(var i = 0;i<$scope.todos.length;i++){
				if($scope.todos[i].id === id){
					$scope.todos.splice(i,1);
					break;
				};
			};
		};

		//清空已完成
		$scope.clear = function(){
			var result = [];
			for(var i = 0;i<$scope.todos.length;i++){
				if(!$scope.todos[i].completed){
					result.push($scope.todos[i]);
				};
			};
			$scope.todos = result;
		};

		//是否有已完成
		$scope.existCompleted = function(){
			for(var i = 0;i<$scope.todos.length;i++){
				if(!$scope.todos[i].completed){
					return true;
					
				};
				return false;
			};

		}
		
	}]);
})(angular);
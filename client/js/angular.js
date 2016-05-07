var myapp = angular.module('SocialCops', ['ngRoute', 'countUpModule']);
	myapp.config(function ($routeProvider) {
		$routeProvider
		.when('/',{     
                templateUrl: 'partials/main.html'
            })
			.when('/data',{
                templateUrl: 'partials/data.html'
            })
            .when('/stats',{
                templateUrl: 'partials/stats.html'
            })
            .otherwise({
              redirectTo: '/'
            });
    });

myapp.factory('dataFactory', function($http, $location) {
    var factory = {};
    console.log("Inside factory")
    factory.loadData = function(callback) {
        $http.post('/data1').success(function (output){
        	callback(output);
        })
    }
    return factory;
    });
    
myapp.controller('dataController', function($scope, dataFactory, $location) {
	console.log("Inside Controller");
	dataFactory.loadData(function (data){
		$scope.sachinData = data;
		var fifty = 0;
		var hundered = 0;
		var totalRuns = 0
		var gamesPlayed = $scope.sachinData.length
		for (var i=0; i<$scope.sachinData.length;i++){
				if($scope.sachinData[i].batting_score > 50 && $scope.sachinData[i].batting_score < 100){
					fifty += 1;
				}
				if($scope.sachinData[i].batting_score > 100){
					hundered += 1;
				}
				if($scope.sachinData[i].batting_score != "DNB" && $scope.sachinData[i].batting_score != "TDNB"){
					if($scope.sachinData[i].batting_score.charAt(1) == "*" || $scope.sachinData[i].batting_score.charAt(2) == "*" || $scope.sachinData[i].batting_score.charAt(3) == "*"){
							var asterix = $scope.sachinData[i].batting_score.slice(0, -1);
							var convertAsterix = parseInt(asterix);
							totalRuns += convertAsterix;
					}else{
						var score = $scope.sachinData[i].batting_score;
						var convertScore = parseInt(score);
						totalRuns += convertScore
					}
				}
			}
			var average = totalRuns/gamesPlayed;
			console.log("Average batting_score " + average);
			console.log("Total runs score " + totalRuns);
			console.log("Number of half centuries is " + fifty);
			console.log("Number of centuries is " + hundered);
		})
	})
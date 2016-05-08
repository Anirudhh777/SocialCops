var myapp = angular.module('SocialCops', ['ngRoute', 'countUpModule', 'ng-fusioncharts']);
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
		// console.log($scope.sachinData);
		var fifty = 0;
		var hundered = 0;
		var totalRuns = 0
		var gamesPlayed = $scope.sachinData.length
		for (var i=0; i<$scope.sachinData.length;i++){
				if($scope.sachinData[i].batting_score >= 50 && $scope.sachinData[i].batting_score < 100){
					fifty += 1;
				}
				if($scope.sachinData[i].batting_score >= 100){
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
			// console.log("Average batting_score " + average);
			// console.log("Total runs score " + totalRuns);
			// console.log("Number of half centuries is " + fifty);
			// console.log("Number of centuries is " + hundered);
		})
		$scope.matchesWon = function(){
			var matchesWon = [];
			dataFactory.loadData(function (data){
				$scope.sachinData = data;
				for (var i=0; i<$scope.sachinData.length;i++){
					if($scope.sachinData[i].match_result == "won"){
						matchesWon.push($scope.sachinData[i]);
					}
				}
				$scope.sachinData = matchesWon;
			})
		}
		$scope.matchesLost = function(){
			var matchesLost = [];
			dataFactory.loadData(function (data){
				$scope.sachinData = data;
				for (var i=0; i<$scope.sachinData.length;i++){
					if($scope.sachinData[i].match_result == "lost"){
						matchesLost.push($scope.sachinData[i])
					}
				}
				$scope.sachinData = matchesLost;
			})
		}
		$scope.tossWon = function(){
			var tossWon = [];
			dataFactory.loadData(function (data){
				$scope.sachinData = data;
				for (var i=0; i<$scope.sachinData.length;i++){
					if($scope.sachinData[i].toss == "won"){
						tossWon.push($scope.sachinData[i])
					}
				}
				$scope.sachinData = tossWon;
			})
		}
		$scope.tossLost = function(){
			var tossLost = [];
			dataFactory.loadData(function (data){
				$scope.sachinData = data;
				for (var i=0; i<$scope.sachinData.length;i++){
					if($scope.sachinData[i].toss == "lost"){
						tossLost.push($scope.sachinData[i])
					}
				}
				$scope.sachinData = tossLost;
			})
		}
		$scope.lessThirty = function(){
			var lessThirty = [];
			dataFactory.loadData(function (data){
				$scope.sachinData = data;
				for (var i=0; i<$scope.sachinData.length;i++){
					if($scope.sachinData[i].batting_score < 30){
						lessThirty.push($scope.sachinData[i]);
					}
					else if($scope.sachinData[i].batting_score.charAt(1) == "*" || $scope.sachinData[i].batting_score.charAt(2) == "*" || $scope.sachinData[i].batting_score.charAt(3) == "*"){
							var asterix = $scope.sachinData[i].batting_score.slice(0, -1);
							var convertAsterix = parseInt(asterix);
							if(convertAsterix < 30){
								lessThirty.push($scope.sachinData[i]);
							}
					}
				}
				$scope.sachinData = lessThirty;
			})
		}
		$scope.thirtyFifty = function(){
			var thirtyFifty = [];
			dataFactory.loadData(function (data){
				$scope.sachinData = data;
				for (var i=0; i<$scope.sachinData.length;i++){
					if($scope.sachinData[i].batting_score >= 30 && $scope.sachinData[i].batting_score < 50){
						thirtyFifty.push($scope.sachinData[i]);
					}
					else if($scope.sachinData[i].batting_score.charAt(1) == "*" || $scope.sachinData[i].batting_score.charAt(2) == "*" || $scope.sachinData[i].batting_score.charAt(3) == "*"){
							var asterix = $scope.sachinData[i].batting_score.slice(0, -1);
							var convertAsterix = parseInt(asterix);
							if(convertAsterix >= 30 && convertAsterix < 50){
								thirtyFifty.push($scope.sachinData[i])
							}
					}
				}
				$scope.sachinData = thirtyFifty;
			})
		}
		$scope.halfCentury = function(){
			var halfCentury = [];
			dataFactory.loadData(function (data){
				$scope.sachinData = data;
				for (var i=0; i<$scope.sachinData.length;i++){
					if($scope.sachinData[i].batting_score >= 50 && $scope.sachinData[i].batting_score < 100){
						halfCentury.push($scope.sachinData[i]);
					}
					else if($scope.sachinData[i].batting_score.charAt(1) == "*" || $scope.sachinData[i].batting_score.charAt(2) == "*" || $scope.sachinData[i].batting_score.charAt(3) == "*"){
							var asterix = $scope.sachinData[i].batting_score.slice(0, -1);
							var convertAsterix = parseInt(asterix);
							if(convertAsterix >= 50 && convertAsterix < 100){
								halfCentury.push($scope.sachinData[i]);
							}
					}
				}
				$scope.sachinData = halfCentury;
			})
		}
		$scope.hundredPlus = function(){
			var hundredPlus = [];
			dataFactory.loadData(function (data){
				$scope.sachinData = data;
				for (var i=0; i<$scope.sachinData.length;i++){
					if($scope.sachinData[i].batting_score >= 100){
						hundredPlus.push($scope.sachinData[i]);
					}
					else if($scope.sachinData[i].batting_score.charAt(1) == "*" || $scope.sachinData[i].batting_score.charAt(2) == "*" || $scope.sachinData[i].batting_score.charAt(3) == "*"){
							var asterix = $scope.sachinData[i].batting_score.slice(0, -1);
							var convertAsterix = parseInt(asterix);
							if(convertAsterix >= 100){
								hundredPlus.push($scope.sachinData[i]);
							}
					}
				}
				$scope.sachinData = hundredPlus;
			})
		}
		$scope.inningsOne = function(){
			var inningsOne = [];
			dataFactory.loadData(function (data){
				$scope.sachinData = data;
				for (var i=0; i<$scope.sachinData.length;i++){
					if($scope.sachinData[i].batting_innings == "1st"){
						inningsOne.push($scope.sachinData[i])
					}
				}
				$scope.sachinData = inningsOne
			})
		}
		$scope.inningsTwo = function(){
			var inningsTwo = [];
			dataFactory.loadData(function (data){
				$scope.sachinData = data;
				for (var i=0; i<$scope.sachinData.length;i++){
					if($scope.sachinData[i].batting_innings == "2nd"){
						inningsTwo.push($scope.sachinData[i])
					}
				}
				$scope.sachinData = inningsTwo;
			})
		}
		$scope.reloadPage = function(){
			dataFactory.loadData(function (data){
				$scope.sachinData = data;
			})
		}
	})
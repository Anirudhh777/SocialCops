myapp.controller('statsController', function($scope , dataFactory) {
	dataFactory.loadData(function (data){
		$scope.sachinData = data;
	})
	var halfCentury = 0;
	var hunderedPlus = 0;
	var lessThirty = 0;
	var thirtyFifty = 0;
	var gamesPlayed = $scope.sachinData.length;
	for (var i=0; i<$scope.sachinData.length;i++){
				if($scope.sachinData[i].batting_score >= 50 && $scope.sachinData[i].batting_score < 100){
					halfCentury += 1;
				}
				if($scope.sachinData[i].batting_score >= 100){
					hunderedPlus += 1;
				}
				if($scope.sachinData[i].batting_score < 50 && $scope.sachinData[i].batting_score >= 30){
					thirtyFifty += 1;
				}
				if($scope.sachinData[i].batting_score < 30){
					lessThirty += 1;
				}
		}

	$scope.myDataSource = {
    chart: {
        caption: "According to Score",
        subcaption: "Overall",
        startingangle: "120",
        showlabels: "0",
        showlegend: "1",
        enablemultislicing: "0",
        slicingdistance: "15",
        showpercentvalues: "1",
        showpercentintooltip: "0",
        plottooltext: " : $label Runs : $datavalue",
        theme: "fint"
    },
    data: [
        {
            label: "100s",
            value: hunderedPlus
        },
        {
            label: "50s",
            value: halfCentury
        },
        {
            label: "30-50",
            value: thirtyFifty
        },
        {
            label: "Less Than 30",
            value: lessThirty
        }
    ]
}

	$scope.changeYear = function(){
		var halfCentury = 0;
		var hunderedPlus = 0;
		var lessThirty = 0;
		var thirtyFifty = 0;
		var gamesPlayed = $scope.sachinData.length;
		for (var i=0; i<$scope.sachinData.length;i++){
			var year = $scope.sachinData[i].date.substr($scope.sachinData[i].date.length - 4);
			if(year == $scope.year.select){
				if($scope.sachinData[i].batting_score >= 50 && $scope.sachinData[i].batting_score < 100){
					halfCentury += 1;
				}
				if($scope.sachinData[i].batting_score >= 100){
					hunderedPlus += 1;
				}
				if($scope.sachinData[i].batting_score < 50 && $scope.sachinData[i].batting_score >= 30){
					thirtyFifty += 1;
				}
				if($scope.sachinData[i].batting_score < 30){
					lessThirty += 1;
				}
				if($scope.sachinData[i].batting_score.charAt(1) == "*" || $scope.sachinData[i].batting_score.charAt(2) == "*" || $scope.sachinData[i].batting_score.charAt(3) == "*"){
						var asterix = $scope.sachinData[i].batting_score.slice(0, -1);
						var convertAsterix = parseInt(asterix);
						if(convertAsterix < 30){
							lessThirty += 1;
						}
						if(convertAsterix >= 30 && convertAsterix <50){
							thirtyFifty += 1;
						}
						if(convertAsterix >= 50 && convertAsterix <100){
							halfCentury += 1;
						}
						if(convertAsterix >= 100){
							hunderedPlus += 1;
						}
				}
			}
		}
		$scope.myDataSource = {
    chart: {
        caption: "According to Score",
        subcaption: $scope.year.select,
        startingangle: "120",
        showlabels: "0",
        showlegend: "1",
        enablemultislicing: "0",
        slicingdistance: "15",
        showpercentvalues: "1",
        showpercentintooltip: "0",
        plottooltext: " : $label Runs : $datavalue",
        theme: "fint"
    },
    data: [
        {
            label: "100s",
            value: hunderedPlus
        },
        {
            label: "50s",
            value: halfCentury
        },
        {
            label: "30-50",
            value: thirtyFifty
        },
        {
            label: "Less Than 30",
            value: lessThirty
        }
    ]
}
	}
})
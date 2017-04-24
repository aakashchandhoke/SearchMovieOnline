var app=angular.module('MoviesApp', []);

app.controller("MovieController",function ($scope) {
    var movies=[{title:"Avatar",year:2009,plot:"Blue guys"},
        {title:"Jannat",year:2012,plot:"Emraan"},
        {title:"Fast and Furious 8",year:2017,plot:"Cars"},
        {title:"Harry potter",year:2002,plot:"Magic"}
    ];
    $scope.movies=movies;
    $scope.removeMovie=function(movie){
        var index=$scope.movies.indexOf(movie);
        $scope.movies.splice(index,1);
    };
    $scope.selectMovie=function(movie){
        $scope.movie=movie;
    };
    $scope.updateMovie=function(){
        alert($scope.movie.title);
    };
    $scope.addMovie=function(){
        var newMovie={
         title:$scope.movie.title,
         year:$scope.movie.year,
         plot:$scope.movie.plot
        };
        $scope.movies.push(newMovie);
    };
    });
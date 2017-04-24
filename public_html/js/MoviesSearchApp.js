var app=angular.module('MoviesApp', []);

app.controller("MovieController",function ($scope,$http) {
    var movies=[];
    $scope.movies=movies;
    $scope.removeMovie=function(movie){
        var index=$scope.movies.indexOf(movie);
        $scope.movies.splice(index,1);
    };
    $scope.searchMovies=function(){
        var title=$scope.searchByTitle;
        $http.get("http://www.omdbapi.com/?t="+title)
            .success(function (response){
                console.log(response);
                //$scope.movies=response;
                var newMovie={
                title:response.Title,
                year:response.Year,
                plot:response.Plot
                };
                console.log(newMovie.title);
                $scope.movies.push(newMovie);
    });
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

    
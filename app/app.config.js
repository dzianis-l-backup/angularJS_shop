angular
    .module('app')
    .config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){
        $locationProvider.hashPrefix("!");
        $routeProvider
            .when('/',{
                template:'<div class="app"><a href="#!/start">START</a></div>'
            })
            .when('/start',{
                template:'<shop-list></shop-list>'
            })
            .when('/index',{
                redirectTo:'/'
            })
            .when('/start/:num', {
                template:'<goods-list></goods-list>'
            })
            .otherwise('/');
}]);
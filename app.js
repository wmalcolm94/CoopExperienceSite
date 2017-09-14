(function () {

angular.module('app',['ui.router']);

angular.module('app')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI states
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'src/home/home.view.html'
        })

        .state('comp-edge', {
            url: '/comp-edge',
            templateUrl: 'src/comp-edge/comp-edge.view.html'
        })

        .state('gfht', {
            url: '/gfht',
            templateUrl: 'src/gfht/gfht.view.html'
        })

        .state('skyjack', {
            url: '/skyjack',
            templateUrl: 'src/skyjack/skyjack.view.html'
        });
}

})();

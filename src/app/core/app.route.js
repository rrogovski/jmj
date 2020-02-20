(function () {
    'use strict';

    angular.module('main').config(routerConfig);

    routerConfig.$inject = ['$urlRouterProvider', "$stateProvider"];

    /**
     * Config
     *
     * @param $urlRouterProvider
     * @param $stateProvider
     */
    function routerConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('home');

        // State definitions
        $stateProvider
        .state('app', {
            abstract: true,
            views: {
                'main@': {
                    templateUrl: 'app/core/layouts/default.html'
                }
            }
        });
    }

})();


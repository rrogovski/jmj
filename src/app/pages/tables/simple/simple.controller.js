(function () {
    'use strict';

    angular.module('main').config(configFn);

    /**
     * @ngInject
     * @type {string[]}
     */
    configFn.$inject = ['$stateProvider'];

    /**
     * Config
     *
     * @param $stateProvider
     */
    function configFn($stateProvider) {
        $stateProvider.state('app.tablesSimple', {
            url: '/tables/simple',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/tables/simple/simple.html',
                    controller: ControllerFn,
                    controllerAs: 'vmSimple'
                }
            }
        });
    }

    /**
     * Controller Function
     *
     * @constructor
     */
    function ControllerFn() {
        var vm = this;
    }
})();

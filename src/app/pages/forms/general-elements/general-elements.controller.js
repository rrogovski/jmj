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
        $stateProvider.state('app.formsGeneralElements', {
            url: '/forms/general-elements',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/forms/general-elements/general-elements.html',
                    controller: ControllerFn,
                    controllerAs: 'vmGeneralElements'
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

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
        $stateProvider.state('app.elementsModals', {
            url: '/ui-elements/modals',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/ui-elements/modals/modals.html',
                    controller: ControllerFn,
                    controllerAs: 'vmModals'
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

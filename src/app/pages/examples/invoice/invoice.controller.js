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
        $stateProvider.state('app.examplesInvoice', {
            url: '/examples/invoice',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/examples/invoice/invoice.html',
                    controller: ControllerFn,
                    controllerAs: 'vmInvoice'
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

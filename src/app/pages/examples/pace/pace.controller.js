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
        $stateProvider.state('app.examplesPace', {
            url: '/examples/pace',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/examples/pace/pace.html',
                    controller: ControllerFn,
                    controllerAs: 'vmPace'
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

        // To make Pace works on Ajax calls
        $(document).ajaxStart(function () {
            Pace.restart()
        });
        $(document).ready(function () {
            $('.ajax').click(function () {
                $.ajax({
                    url: '#', success: function (result) {
                        $('.ajax-content').html('<hr>Ajax Request Completed !')
                    }
                })
            })
        });
    }
})();

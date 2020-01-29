(function () {
    'use strict';

    angular.module('main').config(ConfigFn);

    ConfigFn.$inject = [
        "$locationProvider"
    ];

    /**
     * Config
     *
     * @param $locationProvider
     * @constructor
     */
    function ConfigFn($locationProvider) {
        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('');
    }

})();





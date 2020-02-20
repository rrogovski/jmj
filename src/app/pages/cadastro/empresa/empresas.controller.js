(function () {
    'use strict';

    angular.module('main').config(configFn);

    /**
     * @ngInject
     * @type {string[]}
     */
    configFn.$inject = ['$stateProvider'];
    ControllerFn.$inject = ['$location', '$http'];

    /**
     * Config
     *
     * @param $stateProvider
     */
    function configFn($stateProvider) {
        $stateProvider.state('app.empresas', {
            url: '/empresas',
            views: {
                'content@app': {
                    templateUrl: 'app/pages/cadastro/empresa/empresas.html',
                    controller: ControllerFn,
                    controllerAs: 'vmEmpresas'
                }
            }
        });
    }

    /**
     * Controller Function
     *
     * @constructor
     * @param $location
     * @param $http
     */
    function ControllerFn($location, $http) {
        var vm = this;

        $http.get("http://localhost:3333/empresa/")
        .then( function (res) {
            console.log(res);
            vm.empresas = res.data.empresas;
        }).catch( function (err) {
            console.log(err);
        });

        $(document).ready(function () {
            $('#example1').DataTable();
            $('#example2').DataTable({
                'paging'      : true,
                'lengthChange': false,
                'searching'   : false,
                'ordering'    : true,
                'info'        : true,
                'autoWidth'   : false
            })
        });
    }
})();

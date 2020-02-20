(function () {
    "use strict";

    angular.module("main").factory("EmpresaService", ServiceFn);

    /**
     * @ngInject
     * @type {string[]}
     */
    ServiceFn.$inject = ["$location", "$http"];

    /**
     * Service
     * @param $location
     * @param $http
     * @returns {{getEmpresas: getEmpresasFn, getEmpresa: getEmpresaFn, updateEmpresa: updateFn, deleteEmpresa: deleteFn}}
     * @constructor
     */
    function ServiceFn($location, $http) {
        var empresa = {
            id: null,
            razaoSocial: null,
            cnpj: null,
            logradouro: null,
            municipio: null,
            numero: null,
            complemento: null,
            bairro: null,
            cep: null,
            telefone: null,
            email: null,
            site: null,
            usuario: null,
            createAt: null,
            updateAt: null
        };

        return {
            getEmpresas: getEmpresasFn,
            getEmpresa: getEmpresaFn,
            updateEmpresa: updateFn,
            deleteEmpresa: deleteFn
        };

        function getEmpresasFn() {
            return user;
        }

        function getEmpresaFn(id) {
            $http.get(`http://localhost:3333/empresa/${id}`)
            .then( function (res) {
                empresa = res.data.empresa;
            }).catch( function (err) {
                console.log(err);
            });

            user.name = userData.name;
            user.image = userData.image;
            user.registerDate = userData.registerDate;
            user.job = userData.job;

            $location.path("/");
        }

        function logoutFn() {
            user.name = null;
            user.image = null;
            user.registerDate = null;
            user.job = null;

            $location.path("/login");
        }
    }
})();
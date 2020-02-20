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
        $stateProvider.state('login', {
            url: '/login',
            views: {
                'main@': {
                    templateUrl: 'app/pages/login/login.html',
                    controller: ControllerFn,
                    controllerAs: 'vmLogin'
                }
            },
            bodyClass: 'login-page'
        });
    }

    ControllerFn.$inject = ["UserService", "$location", "$http"];

    /**
     * Controller Function
     *
     * @param UserService
     * @param $location
     * @param $http
     * @constructor
     */
    function ControllerFn(UserService, $location, $http) {
        var vm = this;

        vm.userData = {
            name: "Alexander Pierce",
            image: "/images/user2-160x160.jpg",
            registerDate: "2012",
            job: "Web Developer"
        };

        var idRandom = Math.floor(Math.random() * (+10 - +1)) + +1;

        $http.get("http://localhost:3333/empresa/" + idRandom)
        .then( function (res) {
            console.log(res);
            vm.userData.id = res.data.empresa.id;
            vm.userData.email = res.data.empresa.email;
            vm.userData.name = res.data.empresa.razaoSocial;
        }).catch( function (err) {
            console.log(err);
        });

        vm.login = loginFn;

        if (UserService.isLogined()) {
            $location.path("/");
        }

        $(document).ready(function () {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' /* optional */
            });
        });

        function loginFn() {
            UserService.login(vm.userData);
        }
    }
})();

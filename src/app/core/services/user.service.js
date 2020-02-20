(function () {
    "use strict";

    angular.module("main").factory("UserService", ServiceFn);

    /**
     * @ngInject
     * @type {string[]}
     */
    ServiceFn.$inject = ["$location", "$http"];

    /**
     * Service
     * @param $location
     * @param $http
     * @returns {{getUser: (function(): {name: null, image: null, registerDate: null, job: null}), isLogined: (function(): boolean), login: loginFn, logout: logoutFn}}
     * @constructor
     */
    function ServiceFn($location, $http) {
        var user = {
            id: null,
            email: null,
            name: null,
            image: null,
            registerDate: null,
            job: null
        };

        return {
            getUser: getUserFn,
            isLogined: isLoginedFn,
            login: loginFn,
            logout: logoutFn
        };

        function getUserFn() {

            // var idRandom = Math.floor(Math.random() * (+10 - +1)) + +1;

            // $http.get("http://localhost:3333/empresa/" + idRandom)
            // .then( function (res) {
            //     console.log(res);
            //     user.id = res.data.empresa.id;
            //     user.email = res.data.empresa.email;
            //     user.name = res.data.empresa.razaoSocial;
            // }).catch( function (err) {
            //     console.log(err);
            // });

            return user;
        }

        function isLoginedFn() {
            return user.name !== null;
        }

        function loginFn(userData) {
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
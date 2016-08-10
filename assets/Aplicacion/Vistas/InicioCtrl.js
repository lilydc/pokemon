aplicacion.controller("InicioCtrl", function ($scope, $http) {
    $http({
        method: "GET",
        url: "http://localhost:1337/inicio"
    })
});
aplicacion.controller("InicioCtrl", function ($http) {
    $http({
        method: "GET",
        url: "http://localhost:1337/inicio"
    })
});
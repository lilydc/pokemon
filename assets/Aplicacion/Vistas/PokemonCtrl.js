aplicacion.controller("PokemonCtrl", function ($scope, $http) {

    $scope.nuevoPokemon = {
        nombre: "",
        descripcion: "",
        imagen: "",
        numeroDePokemon: "",
        habilidad: "",
        habilidadOculta: "",
        color: "",
        velocidad: "",
        fortaleza: "",
        precision: "",
        resistencia: "",
        salto: ""
    }

    $scope.botonCrearDeshabilitado = false;

    $scope.ingresarPokemon = function () {

        $scope.botonCrearDeshabilitado = true;

        $http({
            method: "POST",
            url: "http: //localhost:1337/Pokemon",
            data: $scope.nuevoPokemon
        }).then(
            function (respuesta) {

                //$scope.cargarPokemon();
                $scope.pokemons.push(respuesta.data);
                $scope.resetearNuevoPokemon();
                $scope.botonCrearDeshabilitado = false;

                console.log(respuesta);
            },
            function (error) {
                $scope.botonCrearDeshabilitado = false;
                console.log(error);
            });

    }

    $scope.cargarPokemon = function () {

        $http({
            method: "GET",
            url: "http://localhost:1337/Pokemon",
            isArray: true
        }).then(
            function (respuesta) {
                $scope.pokemons = respuesta.data;
                console.log(respuesta);
            },
            function (error) {
                console.log(error);
            });



    }

    $scope.resetearNuevoPokemon = function () {

        $scope.nuevoPokemon = {
            nombre: "",
            descripcion: "",
            imagen: "",
            numeroDePokemon: "",
            habilidad: "",
            habilidadOculta: "",
            color: "",
            velocidad: "",
            fortaleza: "",
            precision: "",
            resistencia: "",
            salto: ""
        }
    }

    $scope.cargarPokemon();

    $scope.editarPokemon = function (pokemon) {
        console.log("pokemon.nombre");
        $http({
            method: "PUT",
            url: "http://localhost:1337/Pokemon/" + pokemon.id,
            data: {
                nombre: pokemon.nombre,
                descripcion: pokemon.descripcion,
                imagen: pokemon.imagen,
                numeroDePokemon: pokemon.numeroDePokemon,
                habilidad: pokemon.habilidad,
                habilidadOculta: pokemon.habilidadOculta,
                color: pokemon.color,
                velocidad: pokemon.velocidad,
                fortaleza: pokemon.fortaleza,
                precision: pokemon.precision,
                resistencia: pokemon.resistencia,
                salto: pokemon.salto
            }
        }).then(
            function (respuesta) {
                pokemon.mostrar = !pokemon.mostrar
            },
            function (error) {
                console.log(error);
            });
    }
});
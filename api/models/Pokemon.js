/**
 * Pokemon.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        nombre: {
            type: 'string',
            unique: true,
            required: true
        },
        descripcion: {
            type: 'string',
            required: true
        },
        imagen: {
            collection: "imagenes",
            via: "nombrePokemon"
        },
        numeroDePokemon: {
            type: 'integer',
            required: true,
            unique: true
        },
        habilidad: {
            type: 'string',
            required: true
        },
        habilidadOculta: {
            type: 'string'
        },
        color: {
            type: 'string'
        },
        velocidad: {
            type: 'string',
        },
        fortaleza: {
            type: 'string'
        },
        precision: {
            type: 'string'
        },
        resistencia: {
            type: 'string'
        },
        salto: {
            type: 'string'
        }
    }
};
const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(` https://api.opencagedata.com/geocode/v1/json?q=${encodedUrl}&key={api_key}`)


    if (resp.data.total_results === 0) {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }
    let ubicacion = resp.data.results[0];

    return {
        direccion: ubicacion.formatted,
        lat: ubicacion.geometry.lat,
        lng: ubicacion.geometry.lng
    }
}

module.exports = {
    getLugarLatLng
}
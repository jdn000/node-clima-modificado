const axios = require('axios');

const getClima = async(lat, lgt) => {

    //let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgt}&units=metric&appid={api_key}`)


    if (resp.data.total_results === 0) {
        throw new Error(`No hay resultados `);
    }


    return resp.data.main.temp;
}

module.exports = {
    getClima
}
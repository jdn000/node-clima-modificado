const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion ciudad clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));
    clima.getClima(33, -70)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));
    */
let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El tiempo en ${ direccion} es de ${temp}`;

    } catch (e) {
        return `No se encontro el tiempo en ${ direccion} `;
    }

}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));
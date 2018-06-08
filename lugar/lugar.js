const axios = require('axios');


const getLugarLatLng = async(direccion) => {
 let encodeURL = encodeURI(direccion);
 let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=AIzaSyBknEigBqU0DKsiGBKdjlrrouhvHIrfdNo`)
 if ( resp.data.status === 'ZERO_RESULTS' ){
    throw new Error(`No hay resultados para la ciudad ${ direccion }`);
 }

 let locations = resp.data.results[0];
 let formattedAddress = locations.formatted_address;
 let coors = locations.geometry.location;

  return {
    direccion: formattedAddress ,
    lat: coors.lat,
    lng: coors.lng
  }
}

module.exports = {
  getLugarLatLng
}

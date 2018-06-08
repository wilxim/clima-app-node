const axios = require('axios');
const API_KEY = '6465dbb4234a06f4a63de147eb0c6f8b';

 const getClima = async(lat,lng) =>{

     let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ API_KEY }`)
     return  resp.data.main.temp;

 }


  module.exports = {
   getClima
  }

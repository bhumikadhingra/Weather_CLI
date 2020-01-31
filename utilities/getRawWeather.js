const axios = require("axios");
const getLocation = require('./../utilities/getLocation')

module.exports = async function (location){
// console.log(where);
// console.log("Pointer in getRawWeather ()");

const id = await axios.get("https://www.metaweather.com/api/location/search/?query="+location);
// find where on earth id
// console.log("Location got in get Raw weatehr"+location);
// console.log("Pointer in getLocation function");
var where = id.data[0].woeid;
const anotherResponse = await axios.get("https://www.metaweather.com/api/location/"+where+"/");
const rawweather = anotherResponse.data.consolidated_weather; 
// console.log("Successfully got rawWeather and returned");
return rawweather;

}
const axios = require("axios");
module.exports = async function(){
    
    const response = await axios.get("http://ip-api.com/json/");
    // console.log(response);
    location = response.data.city;
    
// console.log("Where on earth id got is "+ where);
return location;
}
//module.exports();
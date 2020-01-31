const getLoc = require("../utilities/getLocation");
const getraw = require("../utilities/getRawWeather");

const chalk = require("chalk");
const ora = require("ora");
const spinner = ora('Loading weather');
// console.log("Utilities acquired");
module.exports = async function (location){
    // console.log("Pointer in today's function");
    // console.log("Calling getlocation()");
    spinner.start();
    try{
       
        if (location == undefined){
            
            location = await getLoc();
        }
         // const loc = await getloc(location);
     // console.log("Returned back from getLocation with location id"+loc);
     // console.log("Calling getRawWeather function()");
    //  console.log("Location got " + location);
      const rawWeather = await getraw(location);
     // console.log("Returned back from Raw Weather () with raw weather as");
    //   console.log(rawWeather);
      const todayweather = rawWeather[0];
      const temp = Math.ceil(todayweather.the_temp);
        const cond = todayweather.weather_state_name;
        spinner.stop();
  console.log(chalk.cyanBright(`    Today's weather in ${location}
           ${cond}    ${temp}
  `));
}
catch(err){
    // console.log(err);
    spinner.stop();
    console.log(chalk.redBright("Something went wrong !!! Check your command..."));
}

}
// module.exports();
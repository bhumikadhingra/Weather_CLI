
const getraw = require("./../utilities/getRawWeather");
const getLoc = require("./../utilities/getLocation");
const axios = require("axios");
const chalk = require("chalk");
const ora = require("ora");
const spinner = ora('Loading weather');

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
    const rawweather = await getraw(location);
    // console.log("Returned back from Raw Weather () with raw weather as");
    // console.log(rawWeather);
    const sixDayWeathermintemp = [];
    const sixDayWeathercond = [];
    const sixDayWeatherdate = [];
    const sixDayWeathermaxtemp = [];
    for(var i=0;i<rawweather.length;i++){
    sixDayWeathermintemp.push(Math.floor(rawweather[i].min_temp));
    sixDayWeathercond.push(rawweather[i].weather_state_name);
    sixDayWeathermaxtemp.push(Math.ceil(rawweather[i].max_temp));
    sixDayWeatherdate.push(rawweather[i].applicable_date);


}
    spinner.stop();
    // console.log(todayweather)
    console.log(chalk.bgBlackBright(` Date       |  MinTemp  |  MaxTemp  |      Status \n`));
   for( var k=0;k<rawweather.length;k++){
    console.log(chalk.yellowBright(`${sixDayWeatherdate[k]}  |    ${sixDayWeathermintemp[k]}°      |     ${sixDayWeathermintemp[k]}°   |       ${sixDayWeathercond[k]} 
             
    `))
    }
}catch{
    spinner.stop();
    console.log(chalk.redBright("Some error occurred !!! Check your command..."));
}

}

const chalk = require("chalk");
module.exports = function(){
console.log(chalk.magentaBright(`    Weather [command] <options>

    today    --------------- show weather for today
    forecast --------------- show 7 days weather 
    version  --------------- show package version
    help     --------------- how help menu for commands

`));


}
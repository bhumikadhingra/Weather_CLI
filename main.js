const help = require('./commands/help');
const version = require('./commands/version');
const today = require('./commands/today');
const forecast = require('./commands/forecast');
const chalk = require("chalk");
const minimist = require("minimist");



const o_input  = process.argv.slice(2);
const input = minimist(o_input);
// console.log(input)
//var loc = undefined;
const cmd = input._[0];
var loc = input.location || input.l+" "+input._[1] || o_input.slice(1).join(" ") || undefined ;
// // var loc = input[1];

// console.log(input);
// console.log("location from user "+loc );


if(cmd == 'today'){
     // console.log("Today() called");
 today(loc);
 }
 else if ( cmd == 'forecast'){
 forecast(loc); 
 }
 else if(cmd  == 'help'){
     help();
 }

 else if(cmd =='version'){
 version();
 }
 else {
     console.log(chalk.redBright("Wrong command ! Check help for info..."));
 }












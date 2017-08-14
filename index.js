// define const for moment and chalk libraries
var moment = require('moment');
moment().format();

const chalk = require('chalk');

// console.log(chalk.blue('Hello world!'));

// display day of week, full date, and current time
let blueDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// turn date blue
blueDate = chalk.blue(blueDate);

console.log(`It is ${blueDate}.`);

// display nth day of the year
let magentaDay = moment().format("DDDo");
// turn day magenta
magentaDay = chalk.magenta(magentaDay);

console.log(`It is the ${magentaDay} of the year`)

// display seconds into the day
// let cyanSeconds = (moment().hour()*60)*60;
// cyanSeconds += moment().minute()*60;
// cyanSeconds += moment().second();
let cyanSeconds = (moment().hour() * 3600) + (moment().minute() * 60) + (moment().second());
// turn seconds cyan
cyanSeconds = chalk.cyan(cyanSeconds);

console.log(`It is ${cyanSeconds} seconds into the day`);

// is or is not DST
let dst = moment().isDST();

if (dst === true) {
  console.log(`It ${chalk.green("is")} during Daylight Savings Time.`);
} else {
  console.log(`It ${chalk.red("is not")} during Daylight Savings Time.`);
}

// is or is not leap year
let leapYear = moment().isLeapYear();

if (leapYear === true) {
  console.log(`It ${chalk.green("is")} a leap year.`);
} else {
  console.log(`It ${chalk.red("is not")} a leap year.`);
}

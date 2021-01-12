/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
 //(array) => array.ForEach(element => console.log(${element}))

const logger =  (array) => array.forEach(element => console.log(element));

// function logger(array){
//   array.forEach(function(element){
//     console.log(element)
//   });
// }
  

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/

 //(temperatures) => temperatures.map(day => (day - 32) * (5/9));

const toCelsius = (temperatures) => temperatures.map(temperature => (temperature - 32) * (5/9));
 

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
let Exeeds = [];
 //(temperatures, threshhold) => Exeeds = temperatures.filter((temperature, threshhold) => (temprature > threshhold) ? Exeeds )

const hottestDays = (temperatures, threshhold) => Exeeds = temperatures.filter((temperature) => (temperature > threshhold) ? Exeeds : null );

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/

  // (temperatures, threshhold) => temperatures.map(day => (day - 32) * (5/9)); Cexeeds = temperatures.filter((temperature) => (temperature > thrreshhold) ? Cexeeds : null);

// const logHottestDays = (temperatures, threshhold) => temperatures.map(day => (day - 32) * (5/9)).filter((temperature) => (temperature > threshhold));

 let Cexeeds = [];
function logHottestDays(temperatures, threshhold){
  logger(toCelsius(hottestDays(temperatures, threshhold)));
  // Cexeeds = temperatures.filter(function(temperature, threshhold){
  //   return temperature > threshhold;
  // });
  // console.log(Cexeeds)

}
  

/* Uncomment the following lines to test your code... */

// logger([1, 2, 3, 4, 5, 6, 7]);
//  console.log(toCelsius([212, 122])); // should be: [100, 50];
//  console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
//  logHottestDays([140, 68, 212, 45, 149, 122, 19], 80); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };

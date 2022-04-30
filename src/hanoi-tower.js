const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
/* формула '2 ** h - 1' она считает минимальное коллчиество ходов.
   теперь нужно посичтать время, есть число ходов и скорость в час
   колличество ходов разделить на скорость и на 3600(сеунд в часу) перегонки в сеундыч*/
function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = (2 ** disksNumber) - 1
  let seconds = Math.floor(turns / (turnsSpeed / 3600))
  return {
      turns,
      seconds
  }
}


module.exports = {
  calculateHanoi
};

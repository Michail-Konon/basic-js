const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
/* Задаем первоначальный пустой массив,
   дальше для каждого элемента, если он строка (===)
   с помощью методов делаем регистр верхним и забираем первую букву
   и возвращаем сортированный и объеденённый массив
   пришлось добавить трим для того, чтобы убюрать пробелы */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
      return false
  }
  let dreamTeam = [];
  members.forEach(item => {
      if (typeof item === "string") {
          dreamTeam.push(item.trim()
                             .toUpperCase()
                             .charAt(0));
      }
  })
  return dreamTeam.sort()
                  .join('');
};


module.exports = {
  createDreamTeam
};

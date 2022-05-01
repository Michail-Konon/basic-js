const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
/*Может я чего то не догнал, но мы просто задали @ как разделитель
он нам создал массив со значениями до и после @ соответственно
а потом .pop убираем последнее значение возвращая его 
коим домен и является*/
function getEmailDomain(email) {

let domain = email.split('@')
                  .pop()
return domain
}

module.exports = {
  getEmailDomain
};

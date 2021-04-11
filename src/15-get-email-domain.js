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
function getEmailDomain(email) {
  let place = email.indexOf('@');
  let str = email.slice(place + 1);
  if (str.includes('@')) {
    place = str.indexOf('@');
    str = str.slice(place + 1);
    return str;
  }
  return email.slice(place + 1);
}

module.exports = getEmailDomain;

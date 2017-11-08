var fetch = require('isomorphic-fetch')

/**
 * Function to fetch profile
 * @param {string} url
 * @param {string} username
 * @return {object}
 */
function _getUserProfile(url, username) {
  fetch(url + username)
    .then(function (response) {
      if (response.status == 404) {
        console.log({ statusCode: 404 });
      }
      return response.json()
    })
    .then(function (data) {
      console.log(data);
    });
}

var userProfile = {
  /**
  * Fetch github profile for a user
  * @param {string} username
  * @return {object}
  */
  github: function (username) {
    _getUserProfile('https://api.github.com/users/', username)
  },
  /**
  * Fetch gitlab profile for a user
  * @param {string} username
  * @return {object}
  */
  gitlab: function (username) {
    _getUserProfile('https://gitlab.com/api/v3/users?username=', username)
  },
  /**
  * Fetch bitbucket profile for a user
  * @param {string} username
  * @return {object}
  */
  bitbucket: function (username) {
    _getUserProfile('https://api.bitbucket.org/2.0/users/', username)
  }
}

module.exports = userProfile
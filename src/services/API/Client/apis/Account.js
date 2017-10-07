/**
 * Account Service
 * @exports Client/Account
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
class Account {
  constructor(http) {
    this.http = http;
  }
  /**
   * Register.
   *
   * @example
   * const data = {
   *   email: 'xxx@smallmdm.org',
   *   password: 'xxx',
   * };
   * client.account.register(data);
   * @param {Object} data - User data.
   * @param {string} data.email - Email.
   * @param {string} data.password - Password.
   * @returns {Object} User object.
   */
  register(data) {
    return this.http.sendRequest('/account/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  /**
   * Login.
   *
   * @example
   * const data = {
   *   email: 'xxx@smallmdm.org',
   *   password: 'xxx',
   * };
   * client.account.login(data);
   * @param {Object} data -
   * @param {string} data.email - Email.
   * @param {string} data.password - Password.
   * @returns {Object} User object.
   */
  login(data) {
    return this.http.sendRequest('/account/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  /**
   * Logout.
   *
   * @example
   * client.account.logout();
   */
  logout() {
    return this.http.sendRequest('/account/logout', {
      method: 'POST',
    });
  }
  /**
   * Fetch the currently logged in user.
   *
   * @example
   * client.account.getProfile();
   * @returns {Object} User object.
   */
  getProfile() {
    return this.http.sendRequest('/account/profile', {
      method: 'GET',
    });
  }
  /**
   * Update the currently logged in user.
   *
   * @example
   * const data = {
   *   name: 'SmallMDM',
   *   birthday: '2017-09-27',
   * };
   * client.account.updateProfile(data);
   * @param {*} data - User data.
   * @param {string} data.name - Name.
   * @param {string} data.avatar_url - Avatar url.
   * @param {number} data.age - Age.
   * @param {string} data.gender - Gender.
   * @param {string} data.birthday - Birthday.
   * @returns {Object} User object.
   */
  updateProfile(data) {
    return this.http.sendRequest('/account/profile', {
      method: 'PATCH',
      data,
    });
  }
}

export default Account;

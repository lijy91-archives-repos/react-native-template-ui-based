/**
 * User Service
 * @exports Client/Users
 * @class
 * @author JianyingLi <lijy91@foxmail.com>
 */
class Users {
  constructor(http) {
    this.http = http;
  }
  /**
   * Get a specific user.
   *
   * @example
   * client.user(1).get();
   * @returns {Object} User object.
   */
  get() {
    return this.http.sendRequest(`/users/${this.userId}`, {
      method: 'GET',
    });
  }
}

export default Users;

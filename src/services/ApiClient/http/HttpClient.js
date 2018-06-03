/**
 * A Very simple http client
 * @exports services/ApiClient/http/HttpClient
 * @class
 */
class HttpClient {
  /**
   * Create a new instance of HttpClient.
   *
   * @example
   * // ...
   * @param {Object} defaults - The default config for the instance.
   * @param {string} defaults.baseURL - Coming soon.
   */
  constructor(defaults) {
    this.defaults = defaults;
    this.interceptors = {
      request: [],
      response: [],
    };
  }

  /**
   * Sends a single request to server.
   *
   * @example
   * // ...
   * @param {string} url - Coming soon.
   * @param {Object} options - Coming soon.
   */
  async sendRequest(url, options = {}) {
    let requestUrl = `${this.defaults.baseURL}${url}`;
    let requestOptions = options;

    if (!requestOptions.headers) {
      requestOptions.headers = {};
    }

    requestOptions.headers = Object.assign(
      {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      requestOptions.headers,
    );

    this.interceptors.request.forEach((interceptor) => {
      const request = interceptor(requestUrl, requestOptions);
      requestUrl = request.url;
      requestOptions = request.options;
    });

    let response = await fetch(requestUrl, requestOptions);
    this.interceptors.response.forEach((interceptor) => {
      response = interceptor(response);
    });

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    const responseJson = await response.json();
    return responseJson;
  }
}

export default HttpClient;

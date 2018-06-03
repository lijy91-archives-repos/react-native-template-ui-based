import HttpClient from './http/HttpClient';
import configuredStore from '../../redux/store';
import { DeviceEventEmitter, DeviceInfo } from '../../modules';

class ApiClient {
  constructor(defaults = {
    baseURL: 'https://127.0.0.1:8000',
  }) {
    this.http = new HttpClient(defaults);

    this.http.interceptors.request.push((url, options) => {
      const { auth } = configuredStore.store.getState();
      const nextOptions = options;

      if (auth && auth.isLoggedIn) {
        const { access_token: accessToken } = auth.jwtToken;
        nextOptions.headers.Authorization = `Bearer ${accessToken}`;
      }
      nextOptions.headers['X-USER-DEVICE-LANGUAGE'] = DeviceInfo.getDeviceLocale();
      nextOptions.headers['X-USER-DEVICE-TIMEZONE'] = DeviceInfo.getTimezone();
      nextOptions.headers['X-USER-APP-BUILD'] = DeviceInfo.getBuildNumber();
      nextOptions.headers['X-USER-APP-VERSION'] = DeviceInfo.getVersion();

      return { url, options: nextOptions };
    });
    this.http.interceptors.response.push((response) => {
      const { auth } = configuredStore.store.getState();
      const { status } = response;

      if (auth && auth.isLoggedIn && status === 401) {
        DeviceEventEmitter.emit('tokenExpiredEvent');
      }
      return response;
    });
  }

  sendRequest(url, options) {
    return this.http.sendRequest(url, options);
  }
}

export default ApiClient;

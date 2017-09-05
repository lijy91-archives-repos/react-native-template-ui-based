import axios from 'axios';

class API {
  constructor() {
    this.instance = axios.create({
      baseURL: '',
    });
  }
}

export default new API();

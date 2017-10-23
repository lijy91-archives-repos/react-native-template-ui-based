import _ from 'lodash';
import locales from '../resources/locales';

class Lang {
  constructor() {
    this.lang = 'zh-Hans';
  }

  get(key) {
    return _.get(locales, `${this.lang}.${key}`);
  }
}

export default new Lang();

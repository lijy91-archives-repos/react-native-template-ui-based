import { LocaleConfig } from 'react-native-calendars';
import defaultLocales from '../resources/locales';

let language = 'en';
// let language = 'zh-Hans';

const get = (object, path) => {
  if (typeof object === 'object' && path) {
    return path
      .split(/[\.\["'\]]/) // eslint-disable-line
      .filter(Boolean)
      .reduce((acc, current) => acc && acc[current], object);
  }
  return object;
};

/**
 * t
 *
 * @param {*} key - key
 * @param {*} data - data
 */
const t = (key, args = {}) => {
  let value = get(defaultLocales, `${language}.${key}`);

  if (value === undefined) {
    value = get(defaultLocales, `en.${key}`);
  }

  if (value === undefined) {
    value = `Missing ${language}.${key}`;
  }

  if (args) {
    const keys = Object.keys(args);
    keys.forEach((argKey) => {
      const argValue = args[argKey];
      value = value.replace(`__${argKey}__`, argValue);
    });
  }

  return value;
};


/**
 * Use Language
 *
 * @param {*} language - Language
 */
const useLanguage = (l) => {
  language = l;
  LocaleConfig.locales[l] = t('components.calendars');
  LocaleConfig.defaultLocale = l;
};

const I18n = {
  useLanguage,
  t,
};

export {
  I18n as default,
  t,
  useLanguage,
};

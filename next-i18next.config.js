// @ts-check
const Cookies = require('universal-cookie');

const cookies = new Cookies();

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: false,
  i18n: {
    defaultLocale: cookies.get(`locales_persisted`) ?? `pl`,
    locales: ['en', 'pl'],
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
  detection: {
    // Decide on the order of the detectors, from what sources it'll attempt to detect user language.
    // Available detectors are -> cookie, path, header, querystring, localStorage, navigator, htmlTag, session
    order: [
      'cookie',
      'header',
      'localStorage',
      'navigator',
      'htmlTag',
      'path',
      'querystring',
    ],

    // Enable caching of the detected language in given sources.
    // Available cache sources are -> cookie, localStorage and session.
    caches: ['cookie'],

    // If the cookie option is enabled, specify a custom cookie name to be used.
    // The default is i18next.
    cookieName: 'i18next',
  },

  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
};

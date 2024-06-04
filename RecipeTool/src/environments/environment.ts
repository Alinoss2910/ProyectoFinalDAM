// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL: 'https://api.edamam.com/api/recipes/v2?type=public&q=',
  API_URL_URI: 'https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=',
  API_ID: '6ef20e88',
  API_KEY: 'c0438b29686edd03da184ed227325d35',

  API_USER_URL: 'https://localhost:44347/User/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

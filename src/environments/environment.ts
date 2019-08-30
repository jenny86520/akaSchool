// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  postTitles: [
    {
      id: 0,
      title: 'akaSchool',
      path: null
    },
    {
      id: 1,
      title: '從零開始的爆肝工程師日常',
      path: 'helloWorld'
    },
    {
      id: 2,
      title: '從零開始的個人網站【Angular、Git、GitHub 基礎入門】',
      path: 'helloWebsite'
    }
  ],
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

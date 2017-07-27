export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'converter',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Converter Page', // menu title
            icon: 'ion-code-download', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
       {
        path: 'registercompany',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Register Company', // menu title
            icon: 'ion-plus', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }
    ],
  },
];

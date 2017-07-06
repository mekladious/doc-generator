export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'converter',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Converter Page', // menu title
            icon: 'ion-android-home', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
    ],
  },
];

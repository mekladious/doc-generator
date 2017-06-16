import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

// // noinspection TypeScriptValidateTypes
// declare var System: any;
// export function loadChildren(path) { return System.import(path).then(function() {}); }

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
      //  { path: 'new', loadChildren: () => System.import('./new/new.module') },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },

    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

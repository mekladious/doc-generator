import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); }

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'ui', pathMatch: 'full' },
    //  { path: 'new', loadChildren: () => loadChildren('./new/new.module') },
      { path: 'converter', loadChildren: './converter/converter.module#ConverterModule' },
      { path: 'registercompany', loadChildren: './registercompany/registercompany.module#RegisterCompanyModule' }, 
      { path: 'wuzzuf',  loadChildren: './wuzzuf/wuzzuf.module#WuzzufModule' }
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

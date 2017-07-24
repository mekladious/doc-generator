import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'pages/converter', pathMatch: 'full' },
  { path: 'converter', redirectTo: 'pages/converter' },
  { path: 'registercompany', redirectTo: 'pages/registercompany' },
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

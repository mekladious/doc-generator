import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'pages/converter', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/converter' },
  { path: 'converter', redirectTo: 'pages/converter' },
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

import { Routes, RouterModule } from '@angular/router';

import { Converter } from './converter.component';

const routes: Routes = [
  {
    path: '',
    component: Converter,
  },
];

export const routing = RouterModule.forChild(routes);
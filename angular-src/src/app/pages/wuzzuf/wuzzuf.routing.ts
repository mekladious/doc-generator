import { Routes, RouterModule } from '@angular/router';

import { WuzzufComponent } from './wuzzuf.component';

const routes: Routes = [
  {
    path: '',
    component: WuzzufComponent
  }
];

export const routing = RouterModule.forChild(routes);
import { Routes, RouterModule } from '@angular/router';

import { RegisterCompanyComponent } from './registercompany.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterCompanyComponent
  }
];

export const routing = RouterModule.forChild(routes);
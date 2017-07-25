import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WuzzufComponent } from './wuzzuf.component';
import { routing } from './wuzzuf.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    WuzzufComponent
  ]
})
export class WuzzufModule {}
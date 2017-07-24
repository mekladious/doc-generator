import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RegisterCompanyComponent } from './registercompany.component';
import { routing } from './registercompany.routing';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    FlashMessagesModule,
  ],
  declarations: [
    RegisterCompanyComponent
  ]
})
export class RegisterCompanyModule {}
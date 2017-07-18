import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Converter } from './converter.component';
import { routing } from './converter.routing';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    FlashMessagesModule,
  ],
  declarations: [
    Converter,
  ],
})
export class ConverterModule {}

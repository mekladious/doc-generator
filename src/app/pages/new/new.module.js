import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NewComponent} from './new.component.js';
import {routing} from './new.routing.js';

export default class NewModule {}
NewModule.annotations = [new NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        NewComponent
    ]
})];
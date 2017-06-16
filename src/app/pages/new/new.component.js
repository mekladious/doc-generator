import { Component } from '@angular/core';

class NewComponent {

    constructor(service, constant) {}
}
NewComponent.annotations = [new Component({
    selector: 'new',
    template: '<strong>My page content here</strong>'
})];

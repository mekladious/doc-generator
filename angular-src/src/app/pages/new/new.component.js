import { Component } from '@angular/core';
var fs = require('fs');

class NewComponent {

    constructor(service, constant) {
    }

    onGenerate(){
        // CHECKING IF CHECKBOX IS CHECKED
        console.log(this.input1);
        console.log(this.input2);
        console.log(this.input4);
        console.log(this.today);

        if (this.today) {
        this.date = new Date();
        } else {
        this.date = new Date(this.input4);
        }
        console.log(this.date);

        const file = {
        input1 : this.input1,
        input2 : this.input2,
        date : this.date,
        };

        console.log(file);
        
        // GENERATE TXT FILE
        var data = fs.writeFile('./files/file.doc', 

        "Input1: " + file.input1 + '\n'
        + "Input2: " + file.input2 + '\n'
        + "Date: " + file.date

        , 'utf8', function(err){
            if(err){
                throw err
            }
        });
    }
}
NewComponent.annotations = [new Component({
    selector: 'new',
    template: '<strong>My page content here</strong>'
})];

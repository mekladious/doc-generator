import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { FlashMessagesService } from 'angular2-flash-messages';
import { ConvertService } from '../../services/convert.service';
import { CompaniesService } from '../../services/companies.service';

import { FlashMessagesService } from 'angular2-flash-messages';

import { saveAs as importedSaveAs } from 'file-saver';

import { Router } from '@angular/router';
import 'rxjs/Rx' ;

@Component({
  selector: 'converter',
  templateUrl: './converter.html',
})
export class Converter {
  company: string;
  // input3: String;
  input4: string;
  date: Date;
  day: number;
  dayName: String;
  month: number;
  year: number;
  companies: [{}];
  generate: boolean;
  download: boolean;
  dir: String;
  type: String;

  constructor (
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private convertService: ConvertService,
    private companiesService: CompaniesService,
  ) {
    
    this.generate = true;

    this.dir = '/Users/mekladious/ng2-admin/backend/template.docx';

    this.companiesService.getCompanies().subscribe(data => {
          this.companies = data.companies;
      });
  }
  
  onGenerate() {
    this.generate= false;
    this.date = new Date(this.input4);
    const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    this.dayName = days[this.date.getDay()];
    this.day = this.date.getDate();
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();

    const file = {
      companyId : this.company,
      date : this.date,
      day: this.day,
      month: this.month + 1,
      year: this.year,
      dayName: this.dayName,
      meetingtype: this.type
    };
    // console.log(file);
    this.convertService.convert(file).subscribe(res => {
      console.log(res);
      if (res.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        this.flashMessage.show('Document is being generated, your download will start soon',
         { cssClass: 'alert-success', timeout: 4000});
        importedSaveAs(res, this.company + '.docx');
      }else {
        this.flashMessage.show('error generating document', { cssClass: 'alert-danger', timeout: 3000});
        // this.flashMessage.show('error generating document', { cssClass: 'alert-danger', timeout: 3000});
        console.log('error generating document');
      }
      this.generate=true;
    });
  }


}

import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { CompaniesService } from '../../services/companies.service';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'registercompany',
  templateUrl: './registercompany.html',
})
export class RegisterCompanyComponent {
  companyname: string;
  companyaddress: string;
  registernum: Number;
  managername: string;
  manageraddress: string;
  partnername: string;
  partneraddress: string;
  auditorname: string;
  auditoraddress: string;


  constructor(
    private http: Http,
    private router: Router,
    private companiesService: CompaniesService,
    private flashMessage: FlashMessagesService
  ) {
    }

  onSubmit() {
    const newCompany = {
        name: this.companyname,
        address: this.companyaddress,
        register: this.registernum
      };

    const newPartner = {
      name: this.partnername,
      address: this.partneraddress
    };

    const newAuditor = {
      name: this.auditorname, 
      address: this.auditoraddress
    };

    const newManager = {
      name: this.managername,
      address: this.manageraddress
    };

    const body = {
      newCompany,
      newPartner,
      newAuditor,
      newManager
    };

    this.companiesService.addCompany(body).subscribe(res => {
      console.log(res)
      if(res.error){
        window.scrollTo(0,0);
        this.flashMessage.show(res.error.msg,
         { cssClass: 'alert-danger', timeout: 4000});
      }else{
        window.scrollTo(0,0);
        this.flashMessage.show(res.msg,
         { cssClass: 'alert-success', timeout: 4000});
      }
    });
  }

  

}

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
  type: string;
  partners: Array<Object> = [];

  constructor(
    private http: Http,
    private router: Router,
    private companiesService: CompaniesService,
    private flashMessage: FlashMessagesService
  ) {
    this.partners = [];
    }

  addPartner(name, address){
    let newPartner = {"name":name, "address": address};
    this.partners.push(newPartner);
    this.partneraddress="";
    this.partnername="";
    
    console.log(this.partners);
  }

  removePartner(partner){
    let index = this.partners.indexOf(partner);
    this.partners.splice(index,1);
  }

  saveDraft(){
    const company = {
        name: this.companyname,
        address: this.companyaddress,
        register: this.registernum,
        type: this.type
      };

    const auditor = {
      name: this.auditorname, 
      address: this.auditoraddress
    };

    const manager = {
      name: this.managername,
      address: this.manageraddress
    };

    const partners = this.partners

    const data = {
      company,
      partners,
      auditor,
      manager
    };

    this.companiesService.saveDraft(data).subscribe(res => {
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

  onSubmit() {
    const newCompany = {
        name: this.companyname,
        address: this.companyaddress,
        register: this.registernum,
        type: this.type
      };

    const newAuditor = {
      name: this.auditorname, 
      address: this.auditoraddress
    };

    const newManager = {
      name: this.managername,
      address: this.manageraddress
    };

    const partners = this.partners

    const data = {
      newCompany,
      partners,
      newAuditor,
      newManager
    };

    this.companiesService.addCompany(data).subscribe(res => {
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

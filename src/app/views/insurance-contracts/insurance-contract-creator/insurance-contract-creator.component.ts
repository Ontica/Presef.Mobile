/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormHandler, sendEvent } from '@app/shared/utils';
import { Assertion } from '@app/core';

import { ContractFields, ContractTypes, PartyFields, PaymentTypes } from '@app/models/contract';

import { ContractDataService } from '@app/data-services/contract.data.service';


enum InsuranceContractSetCreatorFormControls {
  contractor = 'contractor',
  address = 'address',
  city =  'city',
  state =  'state',
  zip = 'zip',
  dateOfBirth = 'dateOfBirth',
  gender = 'gender',  
  RFC = 'RFC',
  CURP = 'CURP',
  INE =  'INE',
  phone =  'phone',
  cellPhone =  'cellPhone',  
  email = 'email',
  contractType = 'contractType',
  paymentType = 'paymentType',
  contractDate = 'contractDate',
  beneficiary =  'beneficiary'
}


 @Component({
   selector: 'insurance-contract-creator',
   templateUrl: './insurance-contract-creator.component.html',
 })
 export class InsuranceContractCreatorComponent implements OnInit {

  submitted = false;

  index = 0;
  
  @Output() contractCreatorEvent = new EventEmitter<ContractFields>();

  contractTypes: ContractTypes[] = [];
  paymentTypes = PaymentTypes;
    
  formHandler: FormHandler;
  controls =  InsuranceContractSetCreatorFormControls;

  contract: ContractFields;

  isSendContractShow = false;

  private contractId = -1;

  constructor(private contractDataService: ContractDataService) {
    this.initForm();
  }

  ngOnInit(): void { 
    this.getContractTypes();
  } 

  onBack() {
    if (this.index <= 0) {
      return;
    }
    this.index--;
  }

  onSave() {  
    this.contract = this.getFormData(); 
       
    this.contractDataService.createContract(this.contract).
    subscribe(x => { this.contractId = x.contractId;
       this.isSendContractShow = true; this.formHandler.resetForm(); });
  }

  onNext() {
    if (this.index >= 2) {
      return;
    }
    this.index++;
  }

  onSendContract() {

    this.contractDataService.sendContract(this.contractId)
    .subscribe(x => { this.index = 0; this.isSendContractShow = false;
      alert("La poliza ha sido enviada al correo proporcionado!!!")});    
  }
   
   
  private initForm() {
    if (this.formHandler) {
      return;
    }

    this.formHandler = new FormHandler(
      new FormGroup({
        contractor : new FormControl('', Validators.required),
        address : new FormControl('', Validators.required), 
        city : new FormControl('', Validators.required),
        state : new FormControl('', Validators.required),
        zip : new FormControl('', Validators.required),
        dateOfBirth : new FormControl('', Validators.required),
        gender : new FormControl('', Validators.required),
        RFC : new FormControl(''),
        CURP : new FormControl(''),
        INE : new FormControl(''),
        phone : new FormControl(''),
        cellPhone : new FormControl('', Validators.required),     
        email: new FormControl(''),
        contractType : new FormControl('', Validators.required),
        paymentType : new FormControl('', Validators.required),
        contractDate : new FormControl(''),
        beneficiary : new FormControl('', Validators.required)
      })
    );
  }

  private getContractTypes(): void {

    this.contractDataService.getContractTypes()
      .subscribe(x => this.contractTypes = x);
  }

  private getFormData(): ContractFields {
    Assertion.assert(this.formHandler.form.valid,
      'Programming error: form must be validated before command execution.');

    const formModel = this.formHandler.form.getRawValue();

    const data: ContractFields = {
      contractTypeUID : formModel.contractType ?? '',
      paymentType : formModel.paymentType ?? '',      
      startDate: new Date().toString(),
      parties: this.getFormParties()
      }; 
    
    return data;
  }

  private getFormParties(): PartyFields[] {
  let parties: PartyFields[] = [];

  parties.push(this.getContractorFormData());  
  parties.push(this.getBeneficiaryFormData());

  return parties;
  }

  private getContractorFormData(): PartyFields {

    const formModel = this.formHandler.form.getRawValue();
  
    var party: PartyFields = {
      name : formModel.contractor ?? '',
      address : formModel.address ?? '',
      city :  formModel.city ?? '',
      state : formModel.state ?? '',
      zip : formModel.zip ?? '',     
      gender :formModel.gender ?? '',  
      RFC : formModel.RFC ?? '',
      CURP : formModel.CURP ?? '',
      INE : formModel.INE ?? '',
      phoneNumber : formModel.phone ?? '',
      cellPhoneNumber : formModel.cellPhone ?? '',
      email : formModel.email ?? '',
      typeId: 1
    }
    
    return party;
  }

  private getBeneficiaryFormData(): PartyFields {

    const formModel = this.formHandler.form.getRawValue();

    var party: PartyFields =  {
      name: formModel.beneficiary ?? '',
      address : '',
      city :  '',
      state : '',
      zip : '',
      gender :'',
      RFC : '',
      CURP : '',
      INE : '',
      phoneNumber : '',
      cellPhoneNumber : '',
      email : '',
      typeId: 2
    }
  
    return party;
  }

 }
 
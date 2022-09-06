/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

 import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

 
 import { ContractDataService } from '@app/data-services/contract.data.service';
 

 @Component({
   selector: 'insurance-contract',
   templateUrl: './insurance-contract.component.html',
   styleUrls:['./insurance-contract.component.css']
 })
 
 export class InsuranceContractComponent implements OnInit {
  

   constructor(private contractDataService: ContractDataService){}

   ngOnInit(): void {} 


 }
 
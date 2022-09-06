/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
 import { AngularFlexLayoutModule } from '@app/shared/angular-flex-layout.module';
 import { AngularMaterialModule } from '@app/shared/angular-material.module';
 import { SharedModule } from '@app/shared/shared.module';
 
 import { InsuranceContractComponent } from './insurance-contract.component';
 import { InsuranceContractCreatorComponent } from './insurance-contract-creator/insurance-contract-creator.component';

 @NgModule({
   imports: [
     CommonModule,
     FormsModule,
     ReactiveFormsModule,
     AngularMaterialModule,
     AngularFlexLayoutModule,
     SharedModule     
   ],
   declarations: [
     InsuranceContractComponent,
     
     InsuranceContractCreatorComponent
   ],
   exports: [
    InsuranceContractComponent,
    InsuranceContractCreatorComponent
   ]
 })
 export class InsuranceContractModule { }
 
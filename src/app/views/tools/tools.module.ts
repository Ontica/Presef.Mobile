/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { AngularFlexLayoutModule } from '@app/shared/angular-flex-layout.module';

import { SharedModule } from '@app/shared/shared.module';

import { SearchToolComponent } from './search-tool.component';

import { ReportsControlsModule } from '../reports-controls/reports-controls.module';


@NgModule({
  declarations: [
    SearchToolComponent,
  ],
  imports: [
    CommonModule,
    AngularFlexLayoutModule,
    SharedModule,

    ReportsControlsModule,
  ],
  exports: [
    SearchToolComponent,
  ],
})
export class ToolsModule { }

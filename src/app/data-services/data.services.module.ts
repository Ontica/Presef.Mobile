/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { NgModule } from '@angular/core';

import { ProjectDataService } from './projects.data.service';

import { FileDownloadService } from './file-services/file-download.service';
import { getSaver, SAVER } from './file-services/saver.provider';

import { ContractDataService } from './contract.data.service';


@NgModule({

  providers: [
    FileDownloadService,
    ProjectDataService,
    ContractDataService,

    { provide: SAVER, useFactory: getSaver }
  ]

})
export class DataServicesModule { }

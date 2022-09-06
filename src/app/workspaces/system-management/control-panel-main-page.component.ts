/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { Component } from '@angular/core';

import { MessageBoxService } from '@app/shared/containers/message-box';

import { Assertion, EventInfo } from '@app/core';

import { ControlPanelOption, ControlPanelOptionList } from './control-panel-config';

import { Contract, ContractFields } from '@app/models/contract';
import { ContractDataService } from '@app/data-services/contract.data.service';

@Component({
  selector: 'emp-ng-control-panel-main-page',
  templateUrl: './control-panel-main-page.component.html',
})
export class ControlPanelMainPageComponent {

  contractsList: Contract[];
  displayOptionModalSelected = null;

  controlPanelOptionList = ControlPanelOptionList;

  constructor(private messageBox: MessageBoxService,
    private contractDataService: ContractDataService) {}


  onClickControlPanelOption(option: ControlPanelOption) {
    switch (option.type) {

      default:
        this.messageBox.showInDevelopment(option.title, option)
        return;

    }

  }

  onSelectedContractEvent(event:  Contract) {
    
 }

 onCreateContractEvent(envent: EventInfo) {    
  this.displayOptionModalSelected = true;
}


}

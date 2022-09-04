/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { PermissionsLibrary } from '@app/main-layout';


type ControlPanelOptionType = 'FinancialAccounting' |
                              'Land' |
                              'Compliance';



export interface ControlPanelOption {
  title: string;
  description: string;
  actionTitle: string;
  type: ControlPanelOptionType;
  permission: PermissionsLibrary;
}


export const ControlPanelOptionList: ControlPanelOption[] = [
  {
    title: 'Financial Accounting',
    description: 'Aplicación para el Sistema de Contabilidad Financiera.' ,
    actionTitle: 'Banobras',
    type: 'FinancialAccounting',
    permission: PermissionsLibrary.ALL,
  },
  {
    title: 'Land',
    description: 'Aplicación para oficinas de catastro.' ,
    actionTitle: 'Zacatecas',
    type: 'Land',
    permission: PermissionsLibrary.ALL,
  },
  {
    title: 'Compliance',
    description: 'Aplicación de Cumplimiento Normativo.' ,
    actionTitle: 'Talanza',
    type: 'Compliance',
    permission: PermissionsLibrary.ALL,
  },
];

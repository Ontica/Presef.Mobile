/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { AppConfig } from '../common-models/common';


export const APP_CONFIG: AppConfig = {
  data: {
    name: 'Empiria Project UI',
    hint: 'Aplicación Angular 13 del sistema Empiria',
    organization: 'Óntica',
    description: '',
  },
  layout: {
    enablePermissions: false,
    displayNavbarHeader: false,
    displayMenuUser: false,
    displayChangeLanguage: false,
    displayChangePassword: false,
    displayAsideLeft: false,
    displaySubMenu: false,
    displayHeader: false,
    displayFooter: false,
  }
};

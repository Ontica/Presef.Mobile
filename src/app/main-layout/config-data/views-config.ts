/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { PermissionsLibrary as Permissions, ROUTES_LIBRARY } from './permissions-config';

import { View } from '../common-models/common';


export const SystemManagementViews: View[] = [
  {
    name: 'SystemManagementViews.ControlPanel',
    title: 'Panel de control',
    url: ROUTES_LIBRARY.administracion_panel_de_control.fullpath,
    permission: ROUTES_LIBRARY.administracion_panel_de_control.permission,
    actions: [
      {action: 'ActionImport', name: 'Importar', permission: Permissions.ALL},
      {action: 'ActionCreate', name: 'Agregar', permission: Permissions.ALL},
    ]
  },
];


export const UnauthorizedViews: View[] = [
  {
    name: 'Unauthorized',
    title: '',
    url: ROUTES_LIBRARY.unauthorized.fullpath,
  },
];

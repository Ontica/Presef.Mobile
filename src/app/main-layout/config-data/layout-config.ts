/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { ROUTES_LIBRARY } from '../config-data';

import { View, Layout } from '../common-models/common';

import {
  SystemManagementViews,
  UnauthorizedViews,
} from './views-config';


export const APP_VIEWS: View[] = SystemManagementViews; //.concat(SystemManagementViews);


export const APP_LAYOUTS: Layout[] = [
  {
    name: 'Management',
    views: SystemManagementViews,
    hint: 'Herramientas de administración del sistema',
    defaultTitle: 'Administración',
    url: ROUTES_LIBRARY.administracion.fullpath,
    permission: ROUTES_LIBRARY.administracion.permission,
  },
  {
    name: 'Unauthorized',
    views: UnauthorizedViews,
    hint: '',
    defaultTitle: '401: Unauthorized',
    url: ROUTES_LIBRARY.unauthorized.fullpath,
  },
];

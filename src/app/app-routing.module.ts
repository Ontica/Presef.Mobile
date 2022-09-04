/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { SecurityGuard } from './core';

import { DEFAULT_URL, MainLayoutComponent, NoContentComponent, ROUTES_LIBRARY } from '@app/main-layout';

const routes: Routes = [
  {
    data: { permission: ROUTES_LIBRARY.administracion.permission },
    path: ROUTES_LIBRARY.administracion.path,
    component: MainLayoutComponent,
    canActivate: [SecurityGuard],
    canActivateChild: [SecurityGuard],
    loadChildren: () => import('./workspaces/system-management/system-management-workspace.module')
                             .then((m) => m.SystemManagementWorkspaceModule)
  },
  {
    path: ROUTES_LIBRARY.unauthorized.path,
    canActivate: [SecurityGuard],
    component: MainLayoutComponent,
    loadChildren: () => import('./views/unauthorized/unauthorized.module')
                              .then(m => m.UnauthorizedModule)
  },
  {
    path: ROUTES_LIBRARY.security.path,
    loadChildren: () => import('./views/security/security-ui.module')
                              .then(m => m.SecurityUIModule)
  },
  { path: '', redirectTo: DEFAULT_URL, pathMatch: 'full' },
  { path: '**', component: NoContentComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

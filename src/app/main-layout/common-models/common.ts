/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

export type LayoutType = 'Management' | 'Unauthorized';


export interface Layout {
  name: LayoutType;
  views: View[];
  hint: string;
  defaultTitle: string;
  url: string;
  permission?: string;
}


export type ViewActionType = 'None' | 'ActionFilter' | 'ActionCreate' | 'ActionExport' | 'ActionImport' |
                             'ActionChangeStatus';


export interface View {
  name: string;
  title: string;
  url: string;
  menuTitle?: string;
  disabled?: boolean;
  permission?: string;
  actions?: ViewAction[];
}


export interface ViewAction {
  action: ViewActionType;
  name: string;
  icon?: string;
  permission?: string;
}


export const DefaultView: View = {
  name: 'Default view',
  title: 'Default view',
  url: '/',
};

export interface AppData {
  name: string;
  organization: string;
  hint: string;
  description: string;
}


export interface AppLayout {
  enablePermissions: boolean;
  displayNavbarHeader: boolean;
  displayMenuUser: boolean;
  displayChangeLanguage: boolean;
  displayChangePassword: boolean;
  displayAsideLeft: boolean;
  displaySubMenu: boolean;
  displayHeader: boolean;
  displayFooter: boolean;
}


export interface AppConfig {
  data: AppData;
  layout: AppLayout;
}

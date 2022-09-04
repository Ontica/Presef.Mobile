/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { Identifiable } from '@app/core';

export enum ReportGroup {
  Reportes = 'Reportes',
}


export interface ReportType {
  uid: string;
  name: string;
  group?: string;
  accountsCharts?: string[];
  payloadType?: ReportPayloadType;
  exportTo: FileType[] | ExportationType[];
  show?: {
    getAccountsIntegration: boolean;
    datePeriod: boolean;
    singleDate: boolean;
  };
}


export enum ReportPayloadType {
  DateAndSendType = 'DateAndSendType',
}


export interface FileReport {
  url: string;
  type?: FileType;
}


export enum FileType {
  Excel = 'Excel',
  Csv = 'Csv',
  PDF = 'PDF',
  Xml = 'Xml',
  HTML = 'HTML',
}


export interface ExportationType extends Identifiable {
  fileType: FileType;
  dataset?: string;
}


export const DefaultExportationType: ExportationType = {
  uid: FileType.Excel,
  name: FileType.Excel,
  fileType: FileType.Excel,
};

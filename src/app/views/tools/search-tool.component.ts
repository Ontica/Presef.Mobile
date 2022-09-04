/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { Component } from '@angular/core';

import { DataTable, DataTableColumnType } from '@app/models';

@Component({
  selector: 'emp-ng-search-tool',
  templateUrl: './search-tool.component.html',
})
export class SearchToolComponent {
  dataTable: DataTable = {
    query: {},
    columns: [
      {field: 'number', title: 'Número', type: DataTableColumnType.text_link},
      {field: 'name', title: 'nombre', type: DataTableColumnType.text},
      {field: 'type', title: 'Tipo', type: DataTableColumnType.text},
    ],
    entries: [],
  };
}

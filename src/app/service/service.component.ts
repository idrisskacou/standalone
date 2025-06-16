
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AstroComponentsModule } from '@astrouxds/angular';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-service',
  standalone: true,
  providers: [AgGridModule, AstroComponentsModule, CommonModule],
  imports: [AstroComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'account' },
    { field: 'calls' },
    {
      field: 'minutes',
      valueFormatter: (params: { value: number }) => `${params.value}m`
    }
  ];

  defaultColDef: ColDef = {
    flex: 1,
    resizable: true
  };

  rowData = [
    {
      name: 'Jone Ben',
      account: 'A1',
      calls: 25,
      minutes: 560,
      callRecords: [
        { name: 'Call 1', duration: '12m' },
        { name: 'Call 2', duration: '18m' }
      ]
    },
    {
      name: 'Sarah Connor',
      account: 'B2',
      calls: 18,
      minutes: 430,
      callRecords: [
        { name: 'Call 1', duration: '5m' },
        { name: 'Call 2', duration: '13m' }
      ]
    }
  ];

  detailCellRendererParams = {
    detailGridOptions: {
      columnDefs: [
        { field: 'name' },
        { field: 'duration' }
      ],
      defaultColDef: {
        flex: 1
      }
    },
    getDetailRowData: (params: {
      data: { callRecords: any[] };
      successCallback: (records: any[]) => void;
    }) => {
      params.successCallback(params.data.callRecords);
    }
  };
}


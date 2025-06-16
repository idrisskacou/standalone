import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AstroComponentsModule } from '@astrouxds/angular';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-monitor',
  standalone: true,
  providers: [AgGridModule, AstroComponentsModule, CommonModule],
  imports: [AstroComponentsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AstroComponentsModule } from '@astrouxds/angular';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-config',
  imports: [AgGridModule, AstroComponentsModule, CommonModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent {

}

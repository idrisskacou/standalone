import { CommonModule } from '@angular/common';
import { Component, ElementRef, SimpleChanges, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AstroComponentsModule } from '@astrouxds/angular';
import { AgGridModule } from 'ag-grid-angular';
import type { ColDef, GridOptions } from 'ag-grid-community';
import {CookieService} from 'ngx-cookie-service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MonitorComponent } from './service/monitor/monitor.component';
import { StatusComponent } from './service/status/status.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AstroComponentsModule,
    AgGridModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CookieService, MonitorComponent, StatusComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  operatorName: string = "Sgt. Nova Vega";
  missionSector: string = "Sector NV-01";
  consoleVersion: string = "v1.7.3";
  missionStatus: string = "ACTIVE MISSION";
  appstatecolor = "tag3";
  cookieValue: string = '';
  menuicon: string = "menu-icon";
  showDialog: boolean = false;
  dialogMessage: string = "This is your first visit. Confirm or Cancel to proceed";
  @ViewChild('dialogRef') dialogRef!: ElementRef;
  command: string = "Dashboard";
  status: string = "50";
  // siteA: string = "normal";
  // siteB: string = "critical";
  siteA: boolean = true;
  siteB: boolean = false;

  constructor(private cookieService: CookieService, 
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    const userResponse = this.cookieService.get('dialogResponse');
    this.cookieService.set('dialogResponse', 'confirmed', 7); // expires in 7 days


    // Decide whether to show dialog before template renders
    this.showDialog = !userResponse;

    // Optional: Display stored response
    this.cookieValue = userResponse || 'No response yet';
  }

  ngAfterViewInit() {
    // Attach listeners only if dialog is shown
    if (this.showDialog && this.dialogRef) {
      const dialog = this.dialogRef.nativeElement;

      dialog.addEventListener('rux-confirm', () => {
        this.cookieService.set('dialogResponse', 'confirmed');
        this.cookieValue = 'confirmed';
        this.showDialog = false;
      });

      dialog.addEventListener('rux-cancel', () => {
        this.cookieService.set('dialogResponse', 'cancelled');
        this.cookieValue = 'cancelled';
        this.showDialog = false;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    this.updateStatus();
  }

  setCookie() {
    this.cookieService.set('info', 'Manually set');
    this.cookieValue = this.cookieService.get('info');
  }

  getCookie() {
    this.cookieValue = this.cookieService.get('info');
  }
  onMenuClick() {
    
    console.log('Menu icon clicked!');
  // Example: navigate to home
    window.location.href = '/'; // or use Angular Router if you prefer
  }
  toggleTheme(): void {
  const body = document.body;
  body.classList.toggle('dark-theme');
}

  openAlert() {
    throw new Error('Method not implemented.');
  }

  updateStatus (){
    this.siteA = !this.siteA;
    this.siteB = !this.siteB; 
    this.cd.detectChanges();
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
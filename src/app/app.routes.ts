import { Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { MonitorComponent } from './service/monitor/monitor.component';
import { StatusComponent } from './service/status/status.component';

export const routes: Routes = [
    // {path: 'admin', loadChildren: () => import('./admin/routes')},
    { path: "service", component: ServiceComponent},
    { path: "", component: HomeComponent},
    { path: "monitor", component: MonitorComponent},
    { path: "status", component: StatusComponent}
];

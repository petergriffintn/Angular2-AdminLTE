import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminMainSidebarComponent } from './admin-main-sidebar/admin-main-sidebar.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminNavbarComponent,
    AdminMainSidebarComponent,
    AdminContentComponent,
    AdminControlSidebarComponent,
    AdminFooterComponent,
  ]
})
export class AdminModule { }

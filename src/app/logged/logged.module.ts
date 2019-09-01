import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LogedRoutingModule } from './logged-routing.module';
import { MaterialModule } from '../material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PlayasComponent } from './components/playas/playas.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CrudComponent } from './components/crud/crud.component';
import{ServiceService}from '../logged/Service/service.service';
import{HttpClientModule}from '@angular/common/http';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import{FormsModule}from '@angular/forms';
import { CamaraComponent } from './components/camara/camara.component';



@NgModule({
  declarations: [SidenavComponent, ToolbarComponent, PlayasComponent, DashboardComponent,CrudComponent, AddComponent, EditComponent, CamaraComponent],
  imports: [
    CommonModule,
    LogedRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
   
    
  ],
  providers: [ServiceService]

})
export class LoggedModule { }

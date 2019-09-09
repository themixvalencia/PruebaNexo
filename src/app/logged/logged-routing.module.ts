import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CrudComponent } from './components/crud/crud.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';




const routes: Routes = [
{
  path: '',
  component: SidenavComponent,
  children:[
  
    {
      path: 'dashboard',
      component: DashboardComponent

    },
    {
      path: 'crud',
      component: CrudComponent
    },
    {
      path: 'nuevo',
      component: AddComponent
    },
    {
      path: 'edit',
      component: EditComponent
    }
  ]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogedRoutingModule { }

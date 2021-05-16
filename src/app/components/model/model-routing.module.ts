import { AddEditComponent } from './../fuel-type/add-edit/add-edit.component';
import { LayoutComponent } from './../car/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelComponent } from './model.component';


const routes: Routes = [
  {path:"", component:LayoutComponent,
  children:[
    {path:'', component:ModelComponent},
    {path:'add', component:AddEditComponent},
    {path:'edit/:id', component:AddEditComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelRoutingModule { }

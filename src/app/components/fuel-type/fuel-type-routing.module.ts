import { LayoutComponent } from './../car/layout/layout.component';
import { FuelTypeComponent } from './fuel-type.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,
   children:[
      {path:'', component:FuelTypeComponent},
     {path:'add',component:AddEditComponent},
     {path:'edit/:id',component:AddEditComponent},

   ]},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuelTypeRoutingModule { }

import { FuelTypeRoutingModule } from './fuel-type-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { FuelTypeComponent } from './fuel-type.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './add-edit/add-edit.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [FuelTypeComponent, AddEditComponent, LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    FuelTypeRoutingModule
  ]
})
export class FuelTypeModule { }

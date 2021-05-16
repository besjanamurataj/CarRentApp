import { SharedModule } from './../../shared/shared.module';
import { ModelComponent } from './model.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelRoutingModule } from './model-routing.module';
import { AddEditModelComponent } from './add-edit-model/add-edit-model.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AddEditModelComponent,
    LayoutComponent,
    ModelComponent
  ],
  imports: [
    CommonModule,
    ModelRoutingModule,
    SharedModule
  ]
})
export class ModelModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AddEditTransmisionComponent } from './add-edit-transmision/add-edit-transmision.component';
import { TransmitionRoutingModule } from './transmition-routing.module';
import { TransmisionTypeComponent } from './transmision-type.component';



@NgModule({
  declarations: [
    LayoutComponent,
    AddEditTransmisionComponent,
    TransmisionTypeComponent
  ],
  imports: [
    CommonModule,
    TransmitionRoutingModule
  ]
})
export class TransmisionModule { }

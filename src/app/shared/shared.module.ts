import { CardComponent } from './card/card.component';
import { ToastrComponent } from './toastr/toastr.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [ConfirmationComponent,ToastrComponent,CardComponent, ListComponent],
  imports: [
    CommonModule
  ],
  exports:[CardComponent]
})
export class SharedModule { }

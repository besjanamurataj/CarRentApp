import { ToastrService } from './../../core/service/toastr.service';
import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { FuelTypeService } from './../../core/service/fuel-type.service';
import { Component, OnInit } from '@angular/core';
import { FuelType } from 'src/app/core/models/fuelType';
@Component({
  selector: 'app-fuel-type',
  templateUrl: './fuel-type.component.html',
  styleUrls: ['./fuel-type.component.css'],
})
export class FuelTypeComponent implements OnInit {
  fuelType: FuelType;
  fuel: FuelType[] = [];
  constructor(
    private fuelService: FuelTypeService,
    private confirmationService: ConfirmationService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getFuel();
  }
  openConfirm(post) {
    this.confirmationService
      .confirm('Confirmation', 'Are you sure to delete?')
      .then((confirmed) => {
        if (confirmed) {
          this.deletePost(post);
        }
      });
  }
  deletePost(item) {
    const index = this.fuel.indexOf(item);
    this.fuel.splice(index,1)
    this.fuelService.delete(item.id).subscribe(el =>{

    },
    (error)=> {
      this.toastrService.error( 'MESSAGE_ERROR');
    })

  }
  getFuel() {
    this.fuelService.getFuelType().subscribe((data) => {
      this.fuelType = data;
      console.log(data);
    });
  }
}

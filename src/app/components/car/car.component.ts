
import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { CarService } from './../../core/service/car.service';
import { SpinnerOverlayService } from './../../core/service/spinner-overlay.service';
import { ToastrService } from 'src/app/core/service/toastr.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car';
import { MESSAGE_DELETE_CAR, MESSAGE_ERROR } from './car.constant';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  car:Car [] =[];
  myImage:string;
  constructor(private carService:CarService, private confirmationService:ConfirmationService, private  toastrService:ToastrService
  ) {}



  ngOnInit(): void {
 this.carService.getCar().subscribe(data=>{
     this.car = data;
   console.log(data);
 })
  }

openConfirmation(car){
  this.confirmationService
  .confirm('Confirmation', 'Are you sure to delete?')
  .then((confirmed) => {
    if (confirmed) {
      this.deleteCar(car);
    }
  });
}
 deleteCar(car){
   const index = this.car.indexOf(car);
   this.car.splice(index,1);
   this.carService.deleteCar(car.id).subscribe(data =>{
     this.toastrService.success(MESSAGE_DELETE_CAR )
   }, (error) =>{
      this.toastrService.error(MESSAGE_ERROR);
   })
 }
}

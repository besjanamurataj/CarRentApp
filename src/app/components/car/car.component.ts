import { CarService } from './../../core/service/car.service';
import { SpinnerOverlayService } from './../../core/service/spinner-overlay.service';
import { ToastrService } from 'src/app/core/service/toastr.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  car:Car [] =[];
  constructor(private carService:CarService
  ) {}

  ngOnInit(): void {
 this.carService.getCar().subscribe(data=>{
     this.car = data;
   console.log(data);
 })
  }
}

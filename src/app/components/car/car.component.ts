import { CarService } from './../../core/service/car.service';
import { SpinnerOverlayService } from './../../core/service/spinner-overlay.service';
import { ToastrService } from 'src/app/core/service/toastr.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  constructor(private carService:CarService
  ) {}

  ngOnInit(): void {
 this.carService.getCar().subscribe(data=>{
   console.log(data);
 })
  }
}

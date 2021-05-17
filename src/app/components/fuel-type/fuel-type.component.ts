import { FuelTypeService } from './../../core/service/fuel-type.service';
import { Component, OnInit } from '@angular/core';
import { FuelType } from 'src/app/core/models/fuelType';

@Component({
  selector: 'app-fuel-type',
  templateUrl: './fuel-type.component.html',
  styleUrls: ['./fuel-type.component.css']
})
export class FuelTypeComponent implements OnInit {
 fuelType:FuelType;
  constructor(private fuelService:FuelTypeService) { }

  ngOnInit(): void {
     this.fuelService.getFuelType().subscribe(data =>{
       this.fuelType = data;
       console.log(data);
     })
  }

}

import { FuelTypeService } from './../../../core/service/fuel-type.service';
import { BrandService } from 'src/app/core/service/brand.service';
import { CarService } from './../../../core/service/car.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car';
import { Brand } from 'src/app/core/models/brand';
import { FuelType } from 'src/app/core/models/fuelType';
import { ModelService } from 'src/app/core/service/model.service';
import { Model } from 'src/app/core/models/model';

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.css']
})
export class AddEditCarComponent implements OnInit {
car:Car;
brandArr:Brand [] =[];
fuelArray:FuelType [] =[];
modelsArr:Model[] =[];
carForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private carService:CarService, 
    private fueltypeService:FuelTypeService,
    private modelService:ModelService,
    private brandService:BrandService) { }

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      brand: ['', Validators.required],
      fuelType: ['', Validators.required],
      number: ['', Validators.required],
      model: ['', Validators.required],
      transmisionType: ['', Validators.required],
      numberOfDoors: ['', Validators.required],
      carCapacity: ['', Validators.required],
      carColor: ['', Validators.required],
      priceForDay: ['', Validators.required],
      carLocation: ['', Validators.required],
      description: [''],

    });
    this.getListBrand();
    this.getFuelType();
  }
  get brand():FormControl{
    return this.carForm.get('brand') as FormControl;
  }
  get fuelType():FormControl{
    return this.carForm.get('fuelType') as FormControl;
  }
  get number():FormControl{
    return this.carForm.get('number') as FormControl;
  }
  get carColor():FormControl{
    return this.carForm.get('model') as FormControl;
  }
  get transmisionType():FormControl{
    return this.carForm.get('transmisionType') as FormControl;
  }
  get numberOfDoors():FormControl{
    return this.carForm.get('numberOfDoors') as FormControl;
  }
  get carCapacity():FormControl{
    return this.carForm.get('carCapacity') as FormControl;
  }
  get model():FormControl{
    return this.carForm.get('model') as FormControl;
  }
  get priceForDay():FormControl{
    return this.carForm.get('priceForDay') as FormControl;
  }
  get carLocation():FormControl{
    return this.carForm.get('carLocation') as FormControl;
  }
  get description():FormControl{
    return this.carForm.get('description') as FormControl;
  }


  saveCar(){
  this.carService.createCar(this.carForm.value).subscribe(data =>{
     console.log(data);
   })
  }

  

  getListBrand(){
    this.brandService.getAll().subscribe(
      data =>{
        this.brandArr = data;
        console.log(this.brandArr)
      }
    )
  }

getModels(id){
  console.log(id);
 // this.modelsArr=[];
  this.modelService.getElementById(id).subscribe(data =>{
    console.log(data);
     this.modelsArr.push(data);
  }
    )
}

getFuelType(){
  this.fueltypeService.getFuelType().subscribe(data =>{
     this.fuelArray = data;
  }
    )
}
// getFuelType(){
//   this.fueltypeService.getFuelType().subscribe(data =>{
//      this.fuelArray = data;
//   }
//     )
// }
}

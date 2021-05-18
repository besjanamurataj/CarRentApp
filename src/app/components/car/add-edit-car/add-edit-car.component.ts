import { CarService } from './../../../core/service/car.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car';

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.css']
})
export class AddEditCarComponent implements OnInit {
car:Car;
carForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private carService:CarService) { }

  ngOnInit(): void {
    this.carForm = this.formBuilder.group({
      carNumbers: ['', Validators.required],
      brand: ['', Validators.required],
      // fuelType: ['', Validators.required],
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
  }
  get carNumbers():FormControl{
    return this.carForm.get('carNumbers') as FormControl;
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
}

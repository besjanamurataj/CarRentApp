import { FuelTypeService } from './../../../core/service/fuel-type.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
 fuelTypeForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private fuelService:FuelTypeService, private router:Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.fuelTypeForm  = this.formBuilder.group({
      name:['',Validators.required]
    })
  }

  get name():FormControl{
    return this.fuelTypeForm.get('name') as FormControl;
  }

  createFuelType(){
    this.fuelService.create(this.fuelTypeForm.value).subscribe(data =>{
      console.log(data);
    })
      this.router.navigate(['/fueltype'], { relativeTo: this.route });

  }

  updateFuelType(){

  }
}

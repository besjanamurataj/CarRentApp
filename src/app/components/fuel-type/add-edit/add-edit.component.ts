import { ToastrService } from 'src/app/core/service/toastr.service';
import { FuelType } from 'src/app/core/models/fuelType';
import { FuelTypeService } from './../../../core/service/fuel-type.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MESSAGE_ADD_ERROR, MESSAGE_ADD_FUELTYPE, MESSAGE_UPDATE_FUELTYPE } from '../fueltype.constant';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
})
export class AddEditComponent implements OnInit {
  @Input() item:FuelType
  fuelTypeForm: FormGroup;
  id: string;
  isAddModal : boolean;
  constructor(
    private formBuilder: FormBuilder,
    private fuelService: FuelTypeService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {
 this.id = this.route.snapshot.params['id'];
 this.isAddModal = !this.id;
    this.fuelTypeForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    this.title.setTitle('Add');
  }
  get name(): FormControl {
    return this.fuelTypeForm.get('name') as FormControl;
  }



  save(){
    if(this.isAddModal)
    {
      this.createFuelType();

    }
    else{
      this.updateFuelType();
    }
  }




  createFuelType() {
     this.fuelService.create(this.fuelTypeForm.value).subscribe((data) => {
       this.toastr.success( MESSAGE_ADD_FUELTYPE);
       this.router.navigate(['/fueltype'], { relativeTo: this.route });
       console.log(data);
     }, (error)=>{
       this.toastr.error( MESSAGE_ADD_ERROR)
     });


  }
  updateFuelType() {
    this.fuelService.update(this.id,this.fuelTypeForm.value).subscribe((data)=>{
      this.toastr.success( MESSAGE_UPDATE_FUELTYPE);
      this.router.navigate(['/fueltype'], { relativeTo: this.route });

    }
    )

  }
}

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-edit-model',
  templateUrl: './add-edit-model.component.html',
  styleUrls: ['./add-edit-model.component.css']
})
export class AddEditModelComponent implements OnInit {
 modelForm:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
   this.modelForm = this.formBuilder.group({
     brand:['',Validators.required],
     name:['',Validators.required]
   })
  }
  get brand():FormControl{
    return this.modelForm.get('brand') as FormControl
  }
  get name():FormControl{
    return this.modelForm.get('name') as FormControl
  }
}

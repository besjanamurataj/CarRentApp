import { AddModel } from './../../../core/models/AddModels';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from './../../../core/service/toastr.service';
import { BrandService } from 'src/app/core/service/brand.service';
import { ModelService } from './../../../core/service/model.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/core/models/brand';


@Component({
  selector: 'app-add-edit-model',
  templateUrl: './add-edit-model.component.html',
  styleUrls: ['./add-edit-model.component.css']
})
export class AddEditModelComponent implements OnInit {
 modelForm:FormGroup;
 brandArr:Brand[] =[];
 model:AddModel
  constructor(private formBuilder:FormBuilder, private modelService: ModelService, private brandService:BrandService,
    private toastr:ToastrService, private title:Title, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.modelForm = this.formBuilder.group({
     brand:['',Validators.required],
     name:['',Validators.required]
   })
   this.getListBrand();
  }
  get brand():FormControl{
    return this.modelForm.get('brand') as FormControl
  }
  get name():FormControl{
    return this.modelForm.get('name') as FormControl
  }


  save(){
    this.modelService.createModel(this.modelForm.value).subscribe((data)=>{
      console.log(data);
          //  console.log(this.modelForm.value);
           this.router.navigate(['/model'], { relativeTo: this.route });
           this.toastr.success('Add successfull')
    })

  }

  getModel(){
  //  this.modelService.getListById()
  }
  getListBrand(){
    this.brandService.getAll().subscribe(
      data =>{
        this.brandArr = data;
        console.log(this.brandArr)
      }
    )
  }


}

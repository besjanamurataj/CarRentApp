import { AddModel } from './../../../core/models/AddModels';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from './../../../core/service/toastr.service';
import { BrandService } from 'src/app/core/service/brand.service';
import { ModelService } from './../../../core/service/model.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/core/models/brand';
import { MESSAGE_ADD_MODEL, TITLE_MODEL } from '../model.constants';


@Component({
  selector: 'app-add-edit-model',
  templateUrl: './add-edit-model.component.html',
  styleUrls: ['./add-edit-model.component.css']
})
export class AddEditModelComponent implements OnInit {
 modelForm:FormGroup;
 id:string;
 isAddModal : boolean;
 brandArr:Brand[] =[];
 model:AddModel
  constructor(private formBuilder:FormBuilder, private modelService: ModelService, private brandService:BrandService,
    private toastr:ToastrService, private title:Title, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddModal = !this.id;
   this.modelForm = this.formBuilder.group({
     brandId:['',Validators.required],
     name:['',Validators.required]
   })
   this.title.setTitle(TITLE_MODEL);
   this.getListBrand();
  }
  get brandId():FormControl{
    return this.modelForm.get('brandId') as FormControl
  }
  get name():FormControl{
    return this.modelForm.get('name') as FormControl
  }


  save(){
 
    if(this.isAddModal)
    {
      this.createModel();

    }
    else{
      this.updateModel();
    }
  }

  getModel(){
  //  this.modelService.get
  }
  getListBrand(){
    this.brandService.getAll().subscribe(
      data =>{
        this.brandArr = data;
        console.log(this.brandArr)
      }
    )
  }

  createModel(){
    console.log(this.modelForm.value);
    
    this.modelService.createModel(this.modelForm.value).subscribe((data)=>{
      console.log(data);
          //  console.log(this.modelForm.value);
           this.router.navigate(['/model'], { relativeTo: this.route });
           this.toastr.success(MESSAGE_ADD_MODEL)
    })
  }
updateModel(){
  this.modelService.updateModel(this.id, this.modelForm.value).subscribe(data=>{
    console.log(data);
  })
}
}

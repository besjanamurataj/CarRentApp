import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/core/service/brand.service';
import { ToastrService } from 'src/app/core/service/toastr.service';
import { MESSAGE_ADD_BRAND, MESSAGE_ERROR, MESSAGE_UPDATE_BRAND, TITLE_BRAND } from '../brand.constant';

@Component({
  selector: 'app-add-edit-brand',
  templateUrl: './add-edit-brand.component.html',
  styleUrls: ['./add-edit-brand.component.css']
})
export class AddEditBrandComponent implements OnInit {
  brandForm: FormGroup;
  id: string;
  isAddModal : boolean;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private toastr:ToastrService
  ) {}

  ngOnInit(): void {

 this.id = this.route.snapshot.params['id'];
 this.isAddModal = !this.id;
    this.brandForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    this.title.setTitle(TITLE_BRAND);
  }


  get name(): FormControl {
    return this.brandForm.get('name') as FormControl;
  }

  save(){
    if(this.isAddModal)
    {
      this.createBrand();

    }
    else{
      this.updateBrand();
    }
  }
  createBrand() {
     this.brandService.create(this.brandForm.value).subscribe((data) => {
       this.toastr.success(MESSAGE_ADD_BRAND);
       this.router.navigate(['/brand'], { relativeTo: this.route });
       console.log(data);
     },
      (error) => {
      this.toastr.error( MESSAGE_ERROR);
    }
    );
  }
  updateBrand() {
    this.brandService.update(this.id,this.brandForm.value).subscribe((data)=>{
      this.toastr.success( MESSAGE_UPDATE_BRAND);
      this.router.navigate(['/brand'], { relativeTo: this.route });

    },
    ),
    (error) => {
      this.toastr.error( MESSAGE_ERROR);
    }
  }
}

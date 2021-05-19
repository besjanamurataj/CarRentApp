import { ToastrService } from './../../core/service/toastr.service';
import { ConfirmationService } from './../../shared/confirmation/confirmation.service';
import { BrandService } from './../../core/service/brand.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


import { Brand } from 'src/app/core/models/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brand: Brand;
  brandArray: Brand[] = [];
  constructor(
    private brandService: BrandService,
    private confirmationService: ConfirmationService,
    private toastr:ToastrService
  ) {}
  ngOnInit() {
    this.getBrand();
  }

  openConfirm(post) {
    this.confirmationService
      .confirm('Confirmation', 'Are you sure to delete?')
      .then((confirmed) => {
        if (confirmed) {
          this.deleteBrand(post);
        }
      });
  }
  deleteBrand(item) {



    this.brandService.delete(item.id).subscribe((data) => {
      const index = this.brandArray.indexOf(item)
      this.brandArray.splice(index, 1);
      // this.getBrand();
    });
  }

  getBrand() {
    this.brandService.getAll().subscribe((data) => {
      this.brand = data;
      console.log(data);
    },
    (error) => {
      this.toastr.error('Please try agains later');
    });
  }

}

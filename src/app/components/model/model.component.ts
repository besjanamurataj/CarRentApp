import { ModelService } from './../../core/service/model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  constructor(private modelService:ModelService) { }

  ngOnInit(): void {

  }

  getFuelType(id){
    this.modelService.getElementById(id).subscribe(data=>{
      console.log(data);
    })
  }



}

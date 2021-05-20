import { ModelService } from './../../core/service/model.service';
import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/core/models/model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  modal: Model;
  constructor(private modelService: ModelService, private title:Title) {}

  ngOnInit(): void {
     this.title.setTitle('Model List');
  }






}

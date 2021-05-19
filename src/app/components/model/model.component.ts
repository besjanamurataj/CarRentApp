import { ModelService } from './../../core/service/model.service';
import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/core/models/model';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  modal: Model;
  constructor(private modelService: ModelService) {}

  ngOnInit(): void {}






}

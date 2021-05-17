import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http:HttpClientModule) {
   }

   createModel(model:Model){
  // return this.http.post('');
   }
   deleteModel(id:string){
    //  return this.http.delete();

   }
   updateMoel(id:string){
    //  return this.http.put();

   }
}

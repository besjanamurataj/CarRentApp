import { Observable } from 'rxjs';
import { Brand } from './../models/brand';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const baseUrl = `${environment.brandApi}`

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _http:HttpClient) { }

  getBrand(): Observable<Brand>{
    return this._http.get<Brand>(baseUrl)

  }
}

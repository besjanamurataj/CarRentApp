import { Observable } from 'rxjs';
import { Brand } from './../models/brand';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';

const baseUrl = `${environment.brandApi}`;

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private _http: HttpClient) {}

  getAll(): Observable<Brand[]> {
    return this._http.get<Brand[]>(baseUrl);
  }

  create(brand: Brand): Observable<Brand> {
      //return this._http.post<Brand>(baseUrl,brand);
    return this._http.post<Brand>(baseUrl + '/add', brand);
  }
  delete(id) {
    return this._http.delete(`${baseUrl + '/delete/'}/${id}`);
    //return this._http.delete(`${baseUrl}/${id}`);
  }
  update(id, brand) {
   // return this._http.put(`${baseUrl}/${id}`, brand);
    return this._http.put<Brand>(`${baseUrl + '/edit/'}/${id}`, brand);
  }
  getElementById(id) {
    return this._http.delete<Brand>(`${baseUrl}/${id}`);
  }
  getElementModelById(id) {
    return this._http.delete<Brand>(`${baseUrl + '/models/'}/${id}`);
  }
}

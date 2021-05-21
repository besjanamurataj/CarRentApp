import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
const baseUrl = `${environment.carApi}`
@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http:HttpClient) { }

  getCar():Observable<Car[]>{
    return this.http.get<Car[]>(baseUrl +'/cars')
   //return this.http.get<Car[]>(baseUrl);
  }
  createCar(car:Car){
    //return this.http.post(baseUrl,car);
    return this.http.post<Car>(baseUrl+ '/add/',car);
  }
  updateCar(id, car):Observable<Car>{
     return this.http.put<Car>(`${baseUrl + '/edit/'}/${id}`, car)
  }
  deleteCar(id){
    return this.http.delete(`${baseUrl + '/delete/'}/${id}`)
  }
  getCarById(id){
    return this.http.get<Car>(`${baseUrl}/${id}`);
  }
}

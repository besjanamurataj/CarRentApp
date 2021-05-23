import { AccountService } from './account.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { catchError, map } from 'rxjs/operators';
const baseUrl = `${environment.carApi}`;
@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}

  token = this.accountService.getToken();
 header = {Authorization: `Bearer ${this.token}`};
  getCar(): Observable<Car[]> {
    return this.http.get<Car[]>(baseUrl + '/cars',{
      headers:this.header,
      
    });
  }
  createCar(car: Car) {
   
    return this.http.post<Car>(baseUrl + '/add/', car,{
      headers:this.header,
    }).pipe(
      map(res => res),
      
  );
  }
  updateCar(id, car): Observable<Car> {
    return this.http.put<Car>(`${baseUrl + '/edit/'}/${id}`, car,{
      headers:this.header
    });
  }
  deleteCar(id) {
    return this.http.delete(`${baseUrl + '/delete/'}/${id}`);
  }
  getCarById(id) {
    return this.http.get<Car>(`${baseUrl}/${id}`);
  }
}

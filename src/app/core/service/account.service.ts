import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/login';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<Login>;

  constructor(private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): Login {
    return this.currentUserSubject.value;
}


login(username:string,password:string){
 return this.http.post<any>(`${environment.loginApi}`, { username, password })
 .pipe(map(user =>{
   if(user && user.token){
     localStorage.setItem('',JSON.stringify(user))
   }
   return user;
 }))

}



logout(){
       localStorage.removeItem('currentUser');
       console.log('logout')
        this.currentUserSubject.next(null);
    }

}

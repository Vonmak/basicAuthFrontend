// import { signupModel } from './../models/auth.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResData, loginModel, signupModel, User } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = `${environment.apiUrl}`;

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }

  signup(account: signupModel){
    return this.http.post<AuthResData>(`${this.url}signup/`, account).pipe(
      catchError(this.handleError),tap((res)=>{

      })
    )
  }
  login(account: loginModel){
    return this.http.post<AuthResData>(`${this.url}login/`, account).pipe(
      catchError(this.handleError),tap((res)=>{
        this.handleAuth(res);
      })
    )
  }
  autologin(){
    const userData:AuthResData = JSON.parse(localStorage.getItem('user'))
    console.log(userData)
    if(!userData){
        return;
    }
    const loadedUser = new User(userData.id,userData.email,userData.username,userData.name,userData.token)
    this.user.next(loadedUser)
    console.log(loadedUser)
    return;
  }
  private handleError(error: HttpErrorResponse){
    console.log(error)
    let errormessage = 'An unknown errror occured'
    if(!error.error){
        return throwError(errormessage)
    }
    if(error.error.non_field_errors){
        errormessage = error.error.non_field_errors[0]
    }
    if(error.error.email){
        errormessage = error.error.email[0]
    }
    if(error.error.username){
        errormessage = error.error.username[0]
    }
    return throwError(errormessage);
  }
  private handleAuth(res: AuthResData){
    const user = new User(res.id,res.email,res.username,res.name,res.token);
    this.user.next(user);
    localStorage.setItem('userid',JSON.stringify(user.id))
    localStorage.setItem('user',JSON.stringify(user))
  }
  logout(){
    this.user.next(null)
    localStorage.removeItem('user');
    localStorage.removeItem('userid');
    this.router.navigate(['/auth'])
  }
}

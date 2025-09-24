import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { IRigester } from '../../interface/i-rigester';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
 

  private auth=inject(Auth)
  
signUp(data: IRigester): Observable<any> {
  const { email, password } = data;
  return from(createUserWithEmailAndPassword(this.auth, email, password));
}
  logIn(email:string,password:string):Observable<any>{
    return from(signInWithEmailAndPassword(this.auth,email,password))
  } 
  logOut():Observable<any>{
    return from(signOut(this.auth))
  }
}






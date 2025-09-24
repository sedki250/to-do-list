import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth-service';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss'
})
export class SignIn {
constructor(private authService:AuthService,private router:Router){}
  errMsg:string='';
  isLoading:boolean=false;
  loginForm=new FormGroup({
  
  email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
  password: new FormControl<string | null>(null, [Validators.required]),
 
})

submitdata() {
  this.isLoading=true;
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;
    if (email && password) {
      this.authService.logIn( email, password ).subscribe({
        next: (res) => {
          console.log('✅ Registered User:', res);
          if (res.user?.uid) {
            this.router.navigate(['/home']);
            this.isLoading=false;
          }
        },
        error: (err) => {
          console.error('❌ Registration Error:', err.message);
          this.isLoading=false
         switch (err.code) {
    case 'auth/invalid-credential':
      this.errMsg = 'Invalid email or password';
      break;
    case 'auth/user-not-found':
      this.errMsg = 'User not found, please sign up first';
      break;
    case 'auth/wrong-password':
      this.errMsg = 'Incorrect password';
      break;
    default:
      this.errMsg = 'An unexpected error occurred';
  }
        }
      });
    }
  } else {
    this.loginForm.markAllAsTouched();
  }
}


confirmPassword(group:AbstractControl){
  let password=group.get('password')?.value;
  let rePassword=group.get('rePassword')?.value;
  if(password === rePassword){
    return null;
  }else{
    return{
      mismatch:true
    }
  }
}


}

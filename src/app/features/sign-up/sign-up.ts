import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth/auth-service';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IRigester } from '../../interface/i-rigester';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {
  constructor(private authService:AuthService,private router:Router){}
  errMsg:string='';
  isLoading:boolean=false;
registerForm=new FormGroup({
  name: new FormControl<string | null>(null, [Validators.required]),
  email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
  password: new FormControl<string | null>(null, [Validators.required]),
  rePassword: new FormControl<string | null>(null, [Validators.required]),
  phone: new FormControl<string | null>(null, [Validators.required])
},{validators:this.confirmPassword})

submitForm() {
  if (this.registerForm.valid) {
    const { email, password } = this.registerForm.value;
    this.isLoading=true;
    if (email && password) {
      this.authService.signUp({ email, password }).subscribe({
        next: (res) => {
          console.log('✅ Registered User:', res);
          if (res.user?.uid) {
            this.router.navigate(['/signin']);
            this.isLoading=false;
          }
        },
        error: (err) => {
          console.error('❌ Registration Error:', err.message);
          this.isLoading=false
          this.errMsg = err.code.replace('auth/', ''); 
        }
      });
    }
  } else {
    this.registerForm.markAllAsTouched();
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

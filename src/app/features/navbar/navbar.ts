import { Component } from '@angular/core';
import { FlowbiteService } from '../../service/flowbite/flowbite-service';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Auth, onAuthStateChanged, signOut, User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  currentUser:User | null=null;
  router: any;
isMenuOpen: any;
 constructor(private flowbiteService: FlowbiteService,private auth:Auth) {
  onAuthStateChanged(this.auth,(user)=>{
    this.currentUser=user;
  })
 }
 logOut(){
   return signOut(this.auth).then(() => {
      this.router.navigate(['/signin']); // ✅ بعد ما يعمل logout يوديك ع صفحة signin
    });
  }
 

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}

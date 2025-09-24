// import {  Routes } from '@angular/router';
// import { Home } from './features/home/home';
// import { NotFound } from './features/not-found/not-found';
// import { AddTask } from './features/add-task/add-task';
// import { Task } from './features/task/task';
// import { SignUp } from './features/sign-up/sign-up';
// import { SignIn } from './features/sign-in/sign-in';
// import { Navbar } from './features/navbar/navbar';
// import { authGuardGuard } from './service/auth/auth-guard-guard';



// export const routes: Routes = [
//     {path:'',component:Home,title:'Home'},
//     {path:'addtask',component:AddTask,title:'AddTask'},
//     {path:'home',component:Home,title:'home',canActivate:[authGuardGuard]},
//     {
//   path: 'task/:id',
//   component: Task,
//   title: 'Task',
//   canActivate: [authGuardGuard],
//   data: { renderMode: 'client' } 
// }
// ,
//     {path:'task',component:Task,title:'Task',canActivate:[authGuardGuard]},
//     {path:'signin',component:SignIn,title:'signIn'},
//     {path:'signup',component:SignUp,title:'signUp'},
//     {path:'navbar',component:Navbar,title:'navbar'},
//     {path:'**',component:NotFound,title:'NotFound'}
    
// ];
import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { NotFound } from './features/not-found/not-found';
import { AddTask } from './features/add-task/add-task';
import { Task } from './features/task/task';
import { SignUp } from './features/sign-up/sign-up';
import { SignIn } from './features/sign-in/sign-in';
import { Navbar } from './features/navbar/navbar';
import { authGuardGuard } from './service/auth/auth-guard-guard';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'addtask', component: AddTask, title: 'AddTask' },
  { path: 'home', component: Home, title: 'home', canActivate: [authGuardGuard] },
  {
    path: 'task/:id',
    component: Task,
    title: 'Task',
    canActivate: [authGuardGuard],
    data: { renderMode: 'client' } // منع prerender للـ route اللي فيه parameter
  },
  { path: 'task', component: Task, title: 'Task', canActivate: [authGuardGuard] },
  { path: 'signin', component: SignIn, title: 'signIn' },
  { path: 'signup', component: SignUp, title: 'signUp' },
  { path: 'navbar', component: Navbar, title: 'navbar' },
  { path: '**', component: NotFound, title: 'NotFound' }
];

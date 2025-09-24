// import { bootstrapApplication } from '@angular/platform-browser';
// import { App } from './app/app';
// import { provideRouter, withHashLocation } from '@angular/router';
// import { routes } from './app/app.routes';
// import { provideFirebaseApp } from '@angular/fire/app';
// import { initializeApp } from 'firebase/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { environment } from './environments/environment';

// bootstrapApplication(App, {
//   providers: [
//     provideRouter(routes, withHashLocation()),
//     provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
//     provideAuth(() => getAuth()),
//     // لا تستخدم provideClientHydration أو أي prerender
//   ]
// })
// .catch(err => console.error(err));
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app/app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from './environments/environment';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
    // لا تستخدم أي prerender / provideClientHydration
  ]
})
.catch(err => console.error(err));

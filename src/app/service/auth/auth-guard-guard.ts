import { inject } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
const router = inject(Router);
  const auth = inject(Auth);

  return new Promise<boolean>((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true); // يسمح بالدخول
      } else {
        router.navigate(['/signin']); // يرجعه لتسجيل الدخول
        resolve(false);
      }
    });
  });
};

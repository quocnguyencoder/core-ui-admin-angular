// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { Injectable, inject } from '@angular/core';
// import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
// import { HttpRequest } from '@angular/common/http';
// import { HttpHandler } from '@angular/common/http';
// import { HttpEvent } from '@angular/common/http';
// import { tap } from 'rxjs/operators';

// import { AuthenticationService } from '../services/auth.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   private authService = inject(AuthenticationService);
//   private router = inject(Router);
//   private dialog = inject(MatDialog);

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const user = this.authService.getCurrentUser();

//     if (user && user.token) {
//       const cloned = req.clone({
//         headers: req.headers.set('Authorization', 'Bearer ' + user.token),
//       });

//       return next.handle(cloned).pipe(
//         tap(
//           () => {},
//           (err: any) => {
//             if (err instanceof HttpErrorResponse) {
//               if (err.status === 401) {
//                 this.dialog.closeAll();
//                 this.router.navigate(['/auth/login']);
//               }
//             }
//           }
//         )
//       );
//     } else {
//       return next.handle(req);
//     }
//   }
// }

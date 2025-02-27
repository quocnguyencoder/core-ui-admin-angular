// import { Injectable, Inject, inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { delay, map } from 'rxjs/operators';
// // import * as jwt_decode from 'jwt-decode';
// import moment from 'moment';

// import { environment } from '../../../environments/environment';
// import { of, EMPTY } from 'rxjs';
// import { CookieService } from 'ngx-cookie-service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthenticationService {
//   private http = inject(HttpClient);
//   private cookieService = inject(CookieService);

//   constructor() {}

//   login(email: string, password: string) {
//     return of(true).pipe(
//       delay(1000),
//       map((/*response*/) => {
//         // set token property
//         // const decodedToken = jwt_decode(response['token']);

//         // store email and jwt token in local storage to keep user logged in between page refreshes
//         this.cookieService.set(
//           'currentUser',
//           JSON.stringify({
//             token: 'aisdnaksjdn,axmnczm',
//             isAdmin: true,
//             email: 'john.doe@gmail.com',
//             id: '12312323232',
//             alias: 'john.doe@gmail.com'.split('@')[0],
//             expiration: moment().add(1, 'days').toDate(),
//             fullName: 'John Doe',
//           })
//         );

//         return true;
//       })
//     );
//   }

//   logout(): void {
//     // clear token remove user from local storage to log user out
//     this.cookieService.delete('currentUser');
//   }

//   getCurrentUser(): any {
//     // TODO: Enable after implementation
//     // return JSON.parse(this.localStorage.getItem('currentUser'));
//     return {
//       token: 'aisdnaksjdn,axmnczm',
//       isAdmin: true,
//       email: 'john.doe@gmail.com',
//       id: '12312323232',
//       alias: 'john.doe@gmail.com'.split('@')[0],
//       expiration: moment().add(1, 'days').toDate(),
//       fullName: 'John Doe',
//     };
//   }

//   passwordResetRequest(email: string) {
//     return of(true).pipe(delay(1000));
//   }

//   changePassword(email: string, currentPwd: string, newPwd: string) {
//     return of(true).pipe(delay(1000));
//   }

//   passwordReset(
//     email: string,
//     token: string,
//     password: string,
//     confirmPassword: string
//   ): any {
//     return of(true).pipe(delay(1000));
//   }
// }

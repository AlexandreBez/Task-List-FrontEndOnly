import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { AuthResponseData } from './authResponsedata.interface';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new Subject<User>();
  token: string = '';

  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDW8scz5_DvspnoVOK9Jx22mZqps4um-pU',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.ErrorHandle),
        tap((resData) => {
          this.AuthenticationHandle(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  logout(){
    this.user = null!;
    this.router.navigate(['Login']);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }

    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number){
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(
      () => {
        this.logout();
      }, expirationDuration
    )
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDW8scz5_DvspnoVOK9Jx22mZqps4um-pU',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.ErrorHandle),
        tap((resData) => {
          this.AuthenticationHandle(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );

          this.token = resData.idToken;
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData')!);
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData._token,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if(loadedUser.token){
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  private AuthenticationHandle(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user: any = new User(email, userId, token, expirationDate);

    this.user.next(user);

    this.autoLogout(expiresIn * 1000);

    localStorage.setItem('userData', JSON.stringify(user));
  }

  private ErrorHandle(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknow error ocurred...Try again';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => {
        errorMessage;
      });
    }

    if (errorRes.error.error.message === 'EMAIL_EXISTS') {
      errorMessage = 'This email already exist';
    } else if (errorRes.error.error.message === 'EMAIL_NOT_FOUND') {
      errorMessage = "Account don't exist....";
    } else if (errorRes.error.error.message === 'INVALID_PASSWORD') {
      errorMessage = 'Wrong Email and/or password';
    }

    return throwError(errorMessage);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(credentials: any) {
    console.log(credentials);
    return this.http.post('https://reqres.in/api/login', credentials)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  isAuth(): boolean {
    if(sessionStorage.getItem('authToken')) {
      return true; 
    } else {
      return false;
    }
  }
}

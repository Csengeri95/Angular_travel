import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tokenmodel } from './tokenmodel';
import { Loginmodel } from './loginmodel';
import { Router } from '@angular/router';
import { Registermodel } from './registermodel';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private http: HttpClient, private router: Router) { }


  login(model: Loginmodel) {
    this.http.post<Tokenmodel>('https://apiexample.andraskovacs.com/Auth', model)
      .subscribe(t => {
        localStorage.setItem('token', t.token);
        localStorage.setItem('expiration', t.expiration);
        localStorage.setItem('username', model.userName);
        this.router.navigate(['list'])

      })
  }

  




  register(model: Registermodel) {
    this.http.put('https://apiexample.andraskovacs.com/Auth', model)
      .subscribe(t => {
        this.router.navigate(['list'])
      })
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')
    localStorage.removeItem('username')
    this.router.navigate(['list'])
  }



  isLoggedIn() {
    let item = localStorage.getItem('token')
    return item != null
  }

  protectContent() {
    if (!this.isLoggedIn()) {
      this.router.navigate(['login'])
    }
  }
}

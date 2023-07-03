import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Travel } from './travel';
import { Userinfo } from './userinfo';


@Injectable({
  providedIn: 'root'
})
export class TravelService {

  ads: Array<Travel> = new Array<Travel>();
  users: Array<Userinfo> = new Array<Userinfo>();
  actualUser: Userinfo = new Userinfo();



  constructor(private http: HttpClient, private router: Router) {
    this.init()
    this.getList();

  }


  getList() {

    this.http.get<Array<Travel>>('https://apiexample.andraskovacs.com/Travel')
      .subscribe(t => {
        this.ads = t;
        console.log(t)
      })
  }

  create(model: Travel) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })

    this.http.post('https://apiexample.andraskovacs.com/Travel', model, { headers: headers })
      .subscribe(t => {
        this.getList();
        this.router.navigate(['list'])
      })
  }

  async init() {
    await this.getUsers();
    this.getMyUser()
  }

  getUsers(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get<Array<Userinfo>>('https://apiexample.andraskovacs.com/Auth')
        .subscribe(t => {
          this.users = t;
          resolve();
        });
    })
  }

  getMyUser() {
    let username = localStorage.getItem('username');
    let a = this.users.filter(a => a.userName == username)[0];

    if (a != undefined) {
      this.actualUser.firstName = a.firstName;
      this.actualUser.lastName = a.lastName;
    }
  }



}

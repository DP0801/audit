import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {


   }
   getData() {
      let url = 'https://jsonplaceholder.typicode.com/posts';
      return this.http.get(url);
   }

   getDataById(id) {
     let params = new HttpParams().set("id", id);
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url, {params : params});
 }

 getLoggedInUser(uesrname, password) {
    let params = new HttpParams().set("uesrname", uesrname);
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url, {params : params});
  }
}

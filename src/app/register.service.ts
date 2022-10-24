import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService
{
  constructor(private httpClient: HttpClient) { }

  registerUser(user:User) : Observable<Object>
  {
    console.log(user);
    return this.httpClient.post('http://localhost:9090/user',user);
  }
}

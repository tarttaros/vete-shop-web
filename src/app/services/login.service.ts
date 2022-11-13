import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenRequest } from '../token-request';
import { TokenResponse } from '../token-response';
import { tap, shareReplay } from 'rxjs/operators';
import { DateService } from './date.service';
import { MenuComponent } from '../menu/menu.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (private http: HttpClient, private dateService: DateService) { }

  login (userName: string, password: string): Observable<TokenResponse> {
    let tokenRequest: TokenRequest = { userName: userName, password: password };
    return this.http.post<TokenResponse>('http://localhost:9090/login',tokenRequest).pipe(
            tap((resp: TokenResponse) => this.setSession(resp)),shareReplay());
  }

  private setSession (authResult: TokenResponse) {
    const expiresAt = authResult.expirationDate;
    MenuComponent.hideData();
    localStorage.setItem('id_token', authResult.id);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    /*
    console.log("Token expires at " + expiresAt);
    console.log("Token date and time is " + this.dateService.getShortDateAndTimeDisplay(expiresAt));
    */
  }
}

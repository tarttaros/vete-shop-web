import { Injectable } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor () { }

  static logout() {
    MenuComponent.showData();
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn(): boolean {
    return Date.now() < this.getExpiration();
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration(): number {
    const expiration = localStorage.getItem("expires_at") as string;
    const expiresAt = JSON.parse(expiration);
    return expiresAt;
  }

}
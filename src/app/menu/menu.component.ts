import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  static element: Boolean = true;

  static showData() {
      this.element = true;
  }

  static hideData() {
      this.element = false;
  }

  get gStaticElement(){
    return MenuComponent.element;
  }

  logout(){
    AuthenticationService.logout();
  }

}

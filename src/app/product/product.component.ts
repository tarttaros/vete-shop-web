import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  static user: Boolean = true;

  static showDataUser() {
      this.user = true;
  }

  static hideDataUser() {
      this.user = false;
  }

  static vet: Boolean = true;

  static showDataVet() {
      this.vet = true;
  }

  static hideDataVet() {
      this.vet = false;
  }

  static admin: Boolean = true;

  static showDataAdmin() {
      this.admin = true;
  }

  static hideDataAdmin() {
      this.admin = false;
  }

  get gStaticUser(){
    return ProductComponent.user;
  }

  get gStaticVet(){
    return ProductComponent.vet;
  }

  get gStaticAdmin(){
    return ProductComponent.admin;
  }
}

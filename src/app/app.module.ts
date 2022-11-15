import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginVetComponent } from './login-vet/login-vet.component';
import { RegisterVetComponent } from './register-vet/register-vet.component';
import { VetsComponent } from './vets/vets.component';
import { UsersComponent } from './users/users.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    LoginAdminComponent,
    LoginVetComponent,
    RegisterVetComponent,
    VetsComponent,
    UsersComponent,
    ProductComponent,
    RegisterProductComponent
  ],
  imports: [
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

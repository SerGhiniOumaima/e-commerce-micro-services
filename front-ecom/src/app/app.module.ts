import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillsComponent } from './pages/bills/bills.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailsComponent } from './pages/details/details.component';
import {HttpClientModule} from "@angular/common/http";
//import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './pages/home/home.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { NavbarComponent } from './navbar/navbar.component';

export function kcFactory(kcService : KeycloakService){
  return ()=>{
    kcService.init({
      config : {
        realm:"ecom-realm",
        clientId:"ecom-client",
        url:"http://localhost:8080"
      },
      initOptions:{
        onLoad:"check-sso",
        checkLoginIframe:true
      }
    })
  }
}
@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    CustomersComponent,
    ProductsComponent,
    DetailsComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    KeycloakAngularModule
  ],
  providers: [
    {provide : APP_INITIALIZER,deps:[KeycloakService],useFactory : kcFactory,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

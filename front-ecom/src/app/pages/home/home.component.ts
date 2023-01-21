import { Component } from '@angular/core';
import {SecurityService} from "../../services/security.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public securityService:SecurityService) { }

  public async ngOnInit() {

  }

  onLogout() {
    this.securityService.kcService.logout(window.location.origin);
  }
  public async getToken() {
  }

  async login(){
    await this.securityService.kcService.login({
      redirectUri : window.location.origin
    })
  }

  async register(){
    await this.securityService.kcService.register(({
      redirectUri : window.location.origin
    }))
  }

}

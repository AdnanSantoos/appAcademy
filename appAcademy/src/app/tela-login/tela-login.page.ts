import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})
export class TelaLoginPage implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }

  ngOnInit() {
  }

}

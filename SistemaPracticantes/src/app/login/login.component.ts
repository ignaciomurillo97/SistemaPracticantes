import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.formularioLogin = new FormGroup({
      'nombreUsuario': new FormControl(null, [Validators.required]),
      'contrasena': new FormControl(null, Validators.required)
    });
  }

  enviarFormulario() {
    let nombreUsuario = this.formularioLogin.get('nombreUsuario').value;
    let contrasena = this.formularioLogin.get('contrasena').value;
    console.log(nombreUsuario, contrasena);
  }
}

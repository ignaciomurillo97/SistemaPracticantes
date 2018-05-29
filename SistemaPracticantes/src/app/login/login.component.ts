import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  private Url = 'localhost:3000/login'  

  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.formularioLogin = new FormGroup({
      'nombreUsuario': new FormControl(null, [Validators.required]),
      'contrasena': new FormControl(null, Validators.required)
    });
  }

  enviarFormulario() {
    let nombreUsuario = this.formularioLogin.get('nombreUsuario').value;
    let contrasena    = this.formularioLogin.get('contrasena').value;
    let body          = {
      'nombreUsuario':nombreUsuario,
      'contrasena':contrasena
    };

    this.http.post('http://localhost:3000/login', body, {withCredentials: true})
      .subscribe(data => {
        console.log(data);
        this.access(data);
      })
  }

  access(loginResponse) {
    if (loginResponse.autenticar) {
      this.router.navigate([loginResponse.redirect])
    }
  }
}

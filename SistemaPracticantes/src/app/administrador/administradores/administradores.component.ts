import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  administradores: Observable<Object>;

  nuevoCedula : string;
  nuevoNombre : string;
  nuevoSegundoNombre : string;
  nuevoApellido : string;
  nuevoSegundoApellido : string;
  nuevoSexo : string;

  constructor(private router : Router, private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {
    this.obtenerAdministradores();
  }

  obtenerAdministradores() {
    this.administradores = this.http.get('http://localhost:3000/administrador/', {withCredentials: true})
      .map(function (x:any, idx) {
        for (let obj of x) {
          obj.edit = false;
          obj.nuevoCorreo = '';
          obj.nuevoTelefono = '';
        }
        return x;
      });
  }

  obtenerTelefonos(administrador) {
    let telefonos = this.http.get('http://localhost:3000/administrador/telefono/' + administrador.Cedula, {withCredentials: true})
      .subscribe(data => {
        administrador.telefonos = data;
      })
  }

  obtenerCorreos(administrador) {
    let correo = this.http.get('http://localhost:3000/administrador/correo/' + administrador.Cedula, {withCredentials: true})
      .subscribe(data => {
        administrador.correos = data;
      })
  }
  
  agregarAdministrador() {
    let administrador = 
      {
        Cedula : this.nuevoCedula,
        Nombre : this.nuevoNombre,
        SegundoNombre : this.nuevoSegundoNombre,
        Apellido : this.nuevoApellido,
        SegundoApellido : this.nuevoSegundoApellido,
        Sexo : this.nuevoSexo
      }
    this.http.put('http://localhost:3000/administrador/', administrador, {withCredentials: true})
      .subscribe(
        data => {
          this.obtenerAdministradores();
          this.nuevoCedula = "";
          this.nuevoNombre = "";
          this.nuevoSegundoNombre = "";
          this.nuevoApellido = "";
          this.nuevoSegundoApellido = "";
          this.nuevoSexo = "";
        },
        err => {
          alert('datos invalidos');
        }
      );
  }

  agregarCorreo(administrador) {
    let correo = {CorreoElectronico: administrador.nuevoCorreo};
    this.http.put('http://localhost:3000/administrador/correo/' + administrador.Cedula, correo, {withCredentials: true})
      .subscribe(data => {
        this.obtenerCorreos(administrador);
        administrador.nuevoCorreo='';
      })
  }

  agregarTelefono(administrador) {
    let telefono = {NumeroTelefono: administrador.nuevoTelefono};
    this.http.put('http://localhost:3000/administrador/telefono/' + administrador.Cedula, telefono, {withCredentials: true})
      .subscribe(data => {
        this.obtenerTelefonos(administrador);
        administrador.nuevoTelefono='';
      })
  }

  editar(administrador) {
    if (administrador.edit) {
      this.http.post('http://localhost:3000/administrador/', administrador,{withCredentials: true})
        .subscribe(data => {
          this.obtenerTelefonos(administrador);
        })

    }
    administrador.edit = !administrador.edit;
  }
}

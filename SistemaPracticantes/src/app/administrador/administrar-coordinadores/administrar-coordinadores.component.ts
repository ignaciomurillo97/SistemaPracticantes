import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-administrar-coordinadores',
  templateUrl: './administrar-coordinadores.component.html',
  styleUrls: ['./administrar-coordinadores.component.css']
})
export class AdministrarCoordinadoresComponent implements OnInit {

  constructor(private router : Router, private http:HttpClient, private route:ActivatedRoute) { }

  coordinadores: Observable<Object>;
  
  universidades: Observable<Object>;
  sedes: Observable<Object>;
  carreras: Observable<Object>;

  nuevaUniversidad: number;
  nuevaSede: number;
  nuevaCarrera: number;

  ngOnInit() {
    this.obtenerCoordinadores();
    this.obtenerUniversidades();
  }

  obtenerCoordinadores() {
    this.coordinadores = this.http.get('http://localhost:3000/administrador/coordinador/', {withCredentials: true})
      .map(function (x:any, idx) {
        for (let obj of x) {
          obj.edit = false;
          obj.nuevoCorreo = '';
          obj.nuevoTelefono = '';
        }
        return x;
      });
  }

  obtenerTelefonos(coordinador) {
    let telefonos = this.http.get('http://localhost:3000/administrador/telefono/' + coordinador.Cedula, {withCredentials: true})
      .subscribe(data => {
        coordinador.telefonos = data;
      })
  }

  obtenerCorreos(coordinador) {
    let correo = this.http.get('http://localhost:3000/administrador/correo/' + coordinador.Cedula, {withCredentials: true})
      .subscribe(data => {
        coordinador.correos = data;
      })
  }

  agregarCorreo(coordinador) {
    let correo = {CorreoElectronico: coordinador.nuevoCorreo};
    this.http.put('http://localhost:3000/administrador/correo/' + coordinador.Cedula, correo, {withCredentials: true})
      .subscribe(data => {
        this.obtenerCorreos(coordinador);
        coordinador.nuevoCorreo='';
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

  edit(coordinador) {
    if (coordinador.edit) {
      this.http.post('http://localhost:3000/administrador/coordinador/', coordinador, {withCredentials: true}).subscribe(data => {
        this.obtenerCoordinadores();
      })
    }
    coordinador.edit = !coordinador.edit;
  }

  obtenerUniversidades() {
    this.universidades = this.http.get('http://localhost:3000/universidad', {withCredentials: true})
  }

  obtenerSedes(id) {
    this.sedes = this.http.get('http://localhost:3000/sede/' + id, {withCredentials: true});
  }

  obtenerCarreras(id) {
    this.carreras = this.http.get('http://localhost:3000/carrera/' + id, {withCredentials: true});
    this.carreras.subscribe(data => {console.log(data)});
  }

  universidadSeleccionada(value) {
    var element = <HTMLInputElement> document.getElementById("opcionSede");
    element.disabled = false;
    this.obtenerSedes(value);
  }

  sedeSeleccionada(value) {
    var element = <HTMLInputElement> document.getElementById("opcionCarrera");
    element.disabled = false;
    this.obtenerCarreras(value);
  }
}

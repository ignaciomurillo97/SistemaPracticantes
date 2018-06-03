import { Component, OnInit, ViewChild } from '@angular/core';
import { CrearPersonaComponent } from '../../general/crear-persona/crear-persona.component';
import {CrearEstudianteComponent} from '../../general/crear-estudiante/crear-estudiante.component';
import {CrearUsuarioComponent} from '../../general/crear-usuario/crear-usuario.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.component.html',
  styleUrls: ['./registro-estudiante.component.css']
})
export class RegistroEstudianteComponent implements OnInit {

  @ViewChild(CrearPersonaComponent) crearPersona: CrearPersonaComponent;
  @ViewChild(CrearEstudianteComponent) crearEstudiante: CrearEstudianteComponent;
  @ViewChild(CrearUsuarioComponent) crearUsuario: CrearUsuarioComponent;

  error : string;
  errorDeAPI : Object;


  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {

  }

  registrarEstudiante(){

    let personaValida : boolean = this.crearPersona.formularioPersona.valid && this.crearPersona.formularioPersona.touched;
    let usuarioValido : boolean = this.crearUsuario.formularioUsuario.valid && this.crearUsuario.formularioUsuario.touched;
    let estudianteValido : boolean = this.crearEstudiante.formularioEstudiante.valid && this.crearEstudiante.formularioEstudiante.touched;

    if(personaValida && usuarioValido && estudianteValido){
      //datos persona
      let nombre : string = this.crearPersona.formularioPersona.get('nombre').value;
      let apellido : string = this.crearPersona.formularioPersona.get('primerApellido').value;
      let segundoApellido : string = this.crearPersona.formularioPersona.get('segundoApellido').value;
      let cedula : string = this.crearPersona.formularioPersona.get('cedula').value;
      let genero : string = this.crearPersona.formularioPersona.get('genero').value;
      let numerosContacto : number[] = this.crearPersona.formularioPersona.get('numerosContacto').value;
      let correosContacto : string[] = this.crearPersona.formularioPersona.get('correosContacto').value;

      //datos usuario
      let nombreUsuario : string = this.crearUsuario.formularioUsuario.get('nombreDeUsuario').value;
      let contrasena : string = this.crearUsuario.formularioUsuario.get('contraseña').value;

      //datos estudiante
      let carne : number = this.crearEstudiante.formularioEstudiante.get('numeroCarne').value;
      let foto : File = this.crearEstudiante.archivoSeleccionado;
      let carrera : number = this.crearEstudiante.formularioEstudiante.get('carrera').value;

      let datos = {
        "nombre" : nombre,
        "segundoNombre": "",
        "apellido": apellido,
        "segundoApellido": segundoApellido,
        "sexo": genero,
        "contrasena": contrasena,
        "numeroCarne": carne,
        "carrera": carrera,
        "nombreUsuario" : nombreUsuario,
        "cedula" : cedula,
        "correosContacto": correosContacto,
        "numerosContacto": numerosContacto,
        "foto": foto
      };

      this.http.post('http://localhost:3000/estudiante/agregarEstudiante', datos)
        .subscribe(data => {
          this.errorDeAPI = data;
          if (this.errorDeAPI['respuesta'] === ''){
            this.router.navigate(['login']);
          }
        });
    }
    else {
      this.error = 'Datos invalidos';
    }

  }


}

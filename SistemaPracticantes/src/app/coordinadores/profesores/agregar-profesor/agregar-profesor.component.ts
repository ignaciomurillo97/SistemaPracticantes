import {Component, OnInit, ViewChild} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {CrearPersonaComponent} from '../../../general/crear-persona/crear-persona.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar-profesor',
  templateUrl: './agregar-profesor.component.html',
  styleUrls: ['./agregar-profesor.component.css']
})
export class AgregarProfesorComponent implements OnInit {

  @ViewChild(CrearPersonaComponent) crearPersona: CrearPersonaComponent;
  error: string;
  errorDeAPI : Object;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  agregarProfesor() {

    let personaValida : boolean = this.crearPersona.formularioPersona.valid && this.crearPersona.formularioPersona.touched;

    if(personaValida){
      let nombre : string = this.crearPersona.formularioPersona.get('nombre').value;
      let apellido : string = this.crearPersona.formularioPersona.get('primerApellido').value;
      let segundoApellido : string = this.crearPersona.formularioPersona.get('segundoApellido').value;
      let cedula : string = this.crearPersona.formularioPersona.get('cedula').value;
      let genero : string = this.crearPersona.formularioPersona.get('genero').value;
      let numerosContacto : number[] = this.crearPersona.formularioPersona.get('numerosContacto').value;
      let correosContacto : string[] = this.crearPersona.formularioPersona.get('correosContacto').value;
      let cedulaCoordinador : string = sessionStorage.getItem('cedula');

      let datos = {
        "nombre" : nombre,
        "segundoNombre": "",
        "apellido": apellido,
        "segundoApellido": segundoApellido,
        "sexo": genero,
        "cedula" : cedula,
        "correosContacto": correosContacto,
        "numerosContacto": numerosContacto,
        "cedulaCoordinador": cedulaCoordinador
      };

      this.http.post('http://localhost:3000/coordinador/agregarProfesorPractica', datos)
        .subscribe(data => {
          this.errorDeAPI = data;
          if (this.errorDeAPI['respuesta'] === ''){
            this.router.navigate(['coordinadores/profesores']);
          }
        });
    }

    else {
      this.error = 'Rellene los datos necesarios';
    }



  }

}

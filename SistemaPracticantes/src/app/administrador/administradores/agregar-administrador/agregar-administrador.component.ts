import {Component, OnInit, ViewChild} from '@angular/core';
import {CrearPersonaComponent} from '../../../general/crear-persona/crear-persona.component';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-agregar-administrador',
  templateUrl: './agregar-administrador.component.html',
  styleUrls: ['./agregar-administrador.component.css']
})
export class AgregarAdministradorComponent implements OnInit {
  @ViewChild(CrearPersonaComponent) crearPersona: CrearPersonaComponent;



  constructor(private router : Router, private http:HttpClient) { }

  ngOnInit() {
  }

  registrarAdminsitrador(){
    let personaValida : boolean = this.crearPersona.formularioPersona.valid && this.crearPersona.formularioPersona.touched;


    if(personaValida) {
      //datos persona
      let nombre : string = this.crearPersona.formularioPersona.get('nombre').value;
      let apellido : string = this.crearPersona.formularioPersona.get('primerApellido').value;
      let segundoApellido : string = this.crearPersona.formularioPersona.get('segundoApellido').value;
      let cedula : string = this.crearPersona.formularioPersona.get('cedula').value;
      let genero : string = this.crearPersona.formularioPersona.get('genero').value;


      let datos =  {
        Cedula : cedula,
        Nombre : nombre,
        SegundoNombre : '',
        Apellido : apellido,
        SegundoApellido : segundoApellido,
        Sexo : genero
      };

      this.http.put('http://localhost:3000/administrador/', datos, {withCredentials: true})
        .subscribe(
          data => {
            this.router.navigate(['administrador/administradores']);
          },
          err => {
            alert('datos invalidos');
          }
        );
    }

  }

}

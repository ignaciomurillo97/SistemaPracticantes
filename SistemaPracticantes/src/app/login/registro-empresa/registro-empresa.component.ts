import {Component, OnInit, ViewChild} from '@angular/core';
import {CrearPersonaComponent} from '../../general/crear-persona/crear-persona.component';
import {CrearEmpresaComponent} from '../../general/crear-empresa/crear-empresa.component';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CrearUsuarioComponent} from '../../general/crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  @ViewChild(CrearPersonaComponent) crearPersona: CrearPersonaComponent;
  @ViewChild(CrearUsuarioComponent) crearUsuario: CrearUsuarioComponent;
  @ViewChild(CrearEmpresaComponent) crearEmpresa: CrearEmpresaComponent;

  error : string;
  errorAPI : Object;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  registrarEmpresa(){
    let personaValida : boolean = this.crearPersona.formularioPersona.valid && this.crearPersona.formularioPersona.touched;
    let empresaValida : boolean = this.crearEmpresa.formularioEmpresa.valid && this.crearEmpresa.formularioEmpresa.touched;
    let usuarioValido : boolean = this.crearUsuario.formularioUsuario.valid && this.crearUsuario.formularioUsuario.touched;

    if(personaValida && empresaValida && usuarioValido){
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

      //datos empresa
      let nombreEmpresa : string = this.crearEmpresa.formularioEmpresa.get('nombreEmpresa').value;
      let cedulaJuridica : string = this.crearEmpresa.formularioEmpresa.get('cedulaJuridica').value;

      let datos = {
        "nombre" : nombre,
        "segundoNombre": "",
        "apellido": apellido,
        "segundoApellido": segundoApellido,
        "sexo": genero,
        "contrasena": contrasena,
        "nombreUsuario" : nombreUsuario,
        "cedula" : cedula,
        "correosContacto": correosContacto,
        "numerosContacto": numerosContacto,
        "nombreEmpresa": nombreEmpresa,
        "cedulaJuridica": cedulaJuridica
      };

      this.http.post('http://localhost:3000/empresa/crearEmpresa', datos).subscribe(
        data =>{
          this.errorAPI = data;
          if (this.errorAPI['respuesta'] === ''){
            this.router.navigate(['login']);
          }
        }
      );
    }
    else{
      this.error = 'Ingrese datos validos';
    }
  }

}

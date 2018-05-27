import { Component, OnInit, ViewChild } from '@angular/core';
import { CrearPersonaComponent } from '../../general/crear-persona/crear-persona.component';
import {CrearEstudianteComponent} from '../../general/crear-estudiante/crear-estudiante.component';
import {CrearUsuarioComponent} from '../../general/crear-usuario/crear-usuario.component';

@Component({
  selector: 'app-registro-estudiante',
  templateUrl: './registro-estudiante.component.html',
  styleUrls: ['./registro-estudiante.component.css']
})
export class RegistroEstudianteComponent implements OnInit {

  @ViewChild(CrearPersonaComponent) crearPersona : CrearPersonaComponent;
  @ViewChild(CrearEstudianteComponent) crearEstudiante : CrearEstudianteComponent;
  @ViewChild(CrearUsuarioComponent) crearUsuario : CrearUsuarioComponent;

  constructor() { }

  ngOnInit() {

  }

}

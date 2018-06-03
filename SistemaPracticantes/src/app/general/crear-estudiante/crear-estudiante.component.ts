import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent implements OnInit {

  nombreArchivo: string;
  archivoSeleccionado: File;
  formatoArchivoCorrecto : boolean = true;
  formatosPermitidos: string[] = ['jpg', 'jpeg', 'png' , 'svg'];
  formularioEstudiante: FormGroup;
  ingresoArchivo: boolean = false;

  universidades: Observable<Object>;
  sedes: Observable<Object>;
  carreras: Observable<Object>;


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerUniversidades();


    this.formularioEstudiante = new FormGroup({
      'numeroCarne': new FormControl(null, [Validators.min(10000000),
                                            Validators.max(9999999999),
                                            Validators.required]),
      'foto': new FormControl(null),
      'universidad': new FormControl(null),
      'sede': new FormControl(null),
      'carrera' : new FormControl(null)
    });
  }

  cambioEnArchivo(event) {
    //funcion para verificar que se ingreso algo en el campo foto y ademas verificar el tipo de dato
    //del mismo archivo

    this.ingresoArchivo = true;
    this.archivoSeleccionado = event.target.files[0];
    this.nombreArchivo = this.archivoSeleccionado.name;
    let formatoArchivo = this.nombreArchivo.split('.')[1].toLowerCase();
    if( this.formatosPermitidos.indexOf(formatoArchivo) === -1 ){
      this.formatoArchivoCorrecto = false;
      this.formularioEstudiante.get('foto').setValue(this.archivoSeleccionado);
    }
    else {
      this.formatoArchivoCorrecto = true;
    }
  }

  obtenerUniversidades() {
   this.universidades = this.http.get('http://localhost:3000/estudiante/universidades');
  }

  obtenerSedes(){
    let idUniversidad = this.formularioEstudiante.get('universidad').value;
    this.sedes = this.http.post('http://localhost:3000/estudiante/sedes',{idUniversidad: idUniversidad});
  }

  obtenerCarreras(){
    let idSede = this.formularioEstudiante.get('sede').value;
    this.carreras = this.http.post('http://localhost:3000/estudiante/carreras',{idSede: idSede});
  }

}

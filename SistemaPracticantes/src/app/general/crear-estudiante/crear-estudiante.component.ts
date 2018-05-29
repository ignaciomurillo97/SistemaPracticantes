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
  formatosPermitidos = ['jpg', 'jpeg', 'png' , 'svg'];
  formularioEstudiante: FormGroup;
  ingresoArchivo: boolean = false;

  universidades;

  private url: string = 'http://localhost:3000/estudiante/universidades';

  constructor(private http: HttpClient) {


  }

  ngOnInit() {
    this.obtener();


    this.formularioEstudiante = new FormGroup({
      'numeroCarne': new FormControl(null, [Validators.min(10000000),
                                            Validators.max(9999999999),
                                            Validators.required]),
      'foto': new FormControl(null),
      'universidad': new FormControl(null)
    });
  }

  cambioEnArchivo(event) {
    this.ingresoArchivo = true;
    this.archivoSeleccionado = event.target.files[0];
    this.nombreArchivo = this.archivoSeleccionado.name;
    let formatoArchivo = this.nombreArchivo.split('.')[1];
    console.log(formatoArchivo);
    if( this.formatosPermitidos.indexOf(formatoArchivo) === -1 ){
      this.formatoArchivoCorrecto = false;
      this.formularioEstudiante.get('foto').setValue(this.archivoSeleccionado);
    }
    else {
      this.formatoArchivoCorrecto = true;
    }
  }

  obtener() {
    this.http.get('http://localhost:3000/estudiante/universidades').subscribe(
      (response) => {
        // this.obtenerUniversidades(response);
        this.universidades = response ;
        console.log(response);
        console.log(this.universidades);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-documento',
  templateUrl: './agregar-documento.component.html',
  styleUrls: ['./agregar-documento.component.css']
})
export class AgregarDocumentoComponent implements OnInit {

  formularioDocumento: FormGroup;
  nombreArchivo: string;
  archivoSeleccionado: File;
  formatoArchivoCorrecto : boolean = true;
  formatosPermitidos = ['doc', 'docx' , 'pdf'];

  constructor() { }

  ngOnInit() {
    this.formularioDocumento = new FormGroup({
      'nombreDocumento': new FormControl(null, [Validators.required]),
      'documento' : new FormControl(null, [Validators.required]),
      'descripcion' : new FormControl(null, [Validators.required])
    });
  }

  agregarDocumento() {

  }

  cambioEnArchivo(event){
    this.archivoSeleccionado = event.target.files[0]; //se selecciona el archivo
    this.nombreArchivo = this.archivoSeleccionado.name; //se obtiene el nombre del archivo para mostrarlo
    let formatoArchivo = this.nombreArchivo.split('.')[1]; //se obtiene el formato del archivo

    if( this.formatosPermitidos.indexOf(formatoArchivo) === -1 ){
      this.formatoArchivoCorrecto = false;
      this.formularioDocumento.get('documento').setValue(this.archivoSeleccionado);
    }
    else {
      this.formatoArchivoCorrecto = true;
    }
  }
}

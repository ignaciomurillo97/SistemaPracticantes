import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

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
  error:string;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.formularioDocumento = new FormGroup({
      'nombreDocumento': new FormControl(null, [Validators.required]),
      'documento' : new FormControl(null, [Validators.required]),
      'descripcion': new FormControl(null, [Validators.required]),
      'tipoDocumento': new FormControl(null, [Validators.required])
    });
  }

  agregarDocumento() {
    let formularioValido = this.formularioDocumento.valid && this.formatoArchivoCorrecto;

    if(formularioValido){
      let nombreDocumento = this.formularioDocumento.get('nombreDocumento').value;
      let cedulaCoordinador = sessionStorage.getItem('cedula');
      let descripcion = this.formularioDocumento.get('descripcion').value;
      let tipoDocumento = this.formularioDocumento.get('tipoDocumento').value;

      this.convertirImagen(this.archivoSeleccionado).then((documentoConvertido) =>{
        let documento = documentoConvertido;
        let datos = {
          'nombreDocumento':nombreDocumento,
          'cedulaCoordinador':cedulaCoordinador,
          'archivo':documento,
          'descripcion': descripcion,
          'tipoDocumento': tipoDocumento
        };

        this.http.post('http://localhost:3000/coordinador/agregarDocumento',datos).subscribe(data=>{
          this.router.navigate(['coordinadores/documentos']);
        });
      });
    }

    else {
      this.error='Ingrese los datos correctos';
    }

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

  convertirImagen(archivoSeleccionado : File){
    //funcion para convertir un archivo a base64 y es una promsea ya que es un proceso asincrono
    return new Promise(function (resolve,reject) {
      let reader = new FileReader();
      let archivo;
      reader.onloadend = (e) => {
        archivo = reader.result;
        resolve(archivo);
      };
      reader.readAsDataURL(archivoSeleccionado);
    });
  }
}

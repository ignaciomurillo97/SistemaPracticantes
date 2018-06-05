import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  documentos: Observable<Object>;


  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.obtenerDocumentos();
  }

  obtenerDocumentos(){
    let cedulaCoordinador = sessionStorage.getItem('cedula');
    this.documentos = this.http.post('http://localhost:3000/coordinador/obtenerDocumentos',{'cedulaCoordinador':cedulaCoordinador});

  }

  limpiarDocumento(documento:string) {
    return this.sanitizer.bypassSecurityTrustUrl(documento);
  }

  eliminarDocumento(idDocumento){
    this.http.post('http://localhost:3000/coordinador/eliminarDocumento',{'idDocumento':idDocumento}).subscribe(
      data =>{

      }
    );
    this.obtenerDocumentos();

  }

}

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-documentos-empresa',
  templateUrl: './documentos-empresa.component.html',
  styleUrls: ['./documentos-empresa.component.css']
})
export class DocumentosEmpresaComponent implements OnInit {

  documentos: Observable<Object>;

  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.obtenerDocumentos();
  }

  obtenerDocumentos(){
    this.documentos = this.http.get('http://localhost:3000/empresa/obtenerDocumentosEmpresa');

  }

  limpiarDocumento(documento:string) {
    return this.sanitizer.bypassSecurityTrustUrl(documento);
  }

}

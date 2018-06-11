import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-ver-evento',
  templateUrl: './ver-evento.component.html',
  styleUrls: ['./ver-evento.component.css']
})
export class VerEventoComponent implements OnInit {

  informacionEventos : Observable<Object>;

  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.obtenerEventoSeleccionado();
  }

  obtenerEventoSeleccionado(){
    let idEvento = sessionStorage.getItem('eventoSeleccionado');
    this.informacionEventos = this.http.post('http://localhost:3000/empresa/seleccionarEvento',{'idEvento':idEvento});
  }

  limpiarImage(imagen){
    return this.sanitizer.bypassSecurityTrustUrl(imagen);
  }
}

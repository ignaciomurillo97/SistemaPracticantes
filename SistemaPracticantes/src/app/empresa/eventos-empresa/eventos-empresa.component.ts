import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-eventos-empresa',
  templateUrl: './eventos-empresa.component.html',
  styleUrls: ['./eventos-empresa.component.css']
})
export class EventosEmpresaComponent implements OnInit {

  eventos : Observable<Object>;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.obtenerEventos();
  }

  obtenerEventos (){
    let cedulaContacto = sessionStorage.getItem('cedula');
    this.eventos = this.http.post('http://localhost:3000/empresa/obtenerEventosEmpresa',{'cedulaContacto':cedulaContacto});
  }

  seleccionarEvento(idEvento){
    sessionStorage.setItem('eventoSeleccionado', idEvento);
    this.router.navigate(['empresa/eventosEmpresa/eventoSeleccionado'])
  }

}

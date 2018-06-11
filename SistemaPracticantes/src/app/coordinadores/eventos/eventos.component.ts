import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos : Observable<Object>;

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.obtenerEventos();
  }

  obtenerEventos(){
    let cedulaCoordinador = sessionStorage.getItem('cedula');
    this.eventos = this.http.post('http://localhost:3000/coordinador/obtenerEventos',{'cedulaCoordinador':cedulaCoordinador});
  }

  seleccionarEvento(idEvento){
    sessionStorage.setItem('eventoSeleccionado',idEvento)
    this.router.navigate(['coordinadores/eventos/eventoSeleccionado'])
  }

}

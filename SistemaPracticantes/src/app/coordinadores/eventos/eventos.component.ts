import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos : Observable<Object>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerEventos();
  }

  obtenerEventos(){
    let cedulaCoordinador = sessionStorage.getItem('cedula');
    this.eventos = this.http.post('http://localhost:3000/coordinador/obtenerEventos',{'cedulaCoordinador':cedulaCoordinador});
  }

}

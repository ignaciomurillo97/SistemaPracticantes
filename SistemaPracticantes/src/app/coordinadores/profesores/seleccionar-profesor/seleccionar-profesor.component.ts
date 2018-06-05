import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-seleccionar-profesor',
  templateUrl: './seleccionar-profesor.component.html',
  styleUrls: ['./seleccionar-profesor.component.css']
})
export class SeleccionarProfesorComponent implements OnInit {

  profesores: Observable<Object>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerProfesorPractica();
  }

  obtenerProfesorPractica() {
    let cedulaProfesorPractica = sessionStorage.getItem('profesorSeleccionado');
    this.profesores = this.http.post('http://localhost:3000/coordinador/seleccionarProfesorPractica',{'cedulaProfesor':cedulaProfesorPractica});
  }

}

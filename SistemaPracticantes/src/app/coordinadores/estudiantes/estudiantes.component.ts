import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes : Observable<Object>;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerEstudiantesEnPractica();
  }

  obtenerEstudiantesEnPractica(){
    let cedulaCoordinador : string = sessionStorage.getItem('cedula');
    this.estudiantes = this.http.post('http://localhost:3000/coordinador/estudiantesEnPractica',{cedulaCoordinador : cedulaCoordinador});
  }

}

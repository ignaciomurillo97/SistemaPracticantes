import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  profesores: Observable<Object>;

  constructor(private routes: Router,private http: HttpClient) { }

  ngOnInit() {
    this.obtenerProfesoresPractica();
  }

  obtenerProfesoresPractica(){
    let cedulaCoordinador : string = sessionStorage.getItem('cedula');
    this.profesores = this.http.post('http://localhost:3000/coordinador/profesoresDePractica',{'cedulaCoordinador':cedulaCoordinador});
  }

  seleccionarProfesor(cedulaProfesor){
    sessionStorage.setItem('profesorSeleccionado',cedulaProfesor);
    this.routes.navigate(['coordinadores/profesores/profesorSeleccionado']);
  }

  eliminarProfesor(cedulaProfesor){
    this.http.post('http://localhost:3000/coordinador/eliminarProfesorPractica',{'cedulaProfesor':cedulaProfesor})
      .subscribe(data => {
      });
    this.obtenerProfesoresPractica();

  }

}

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-aprobar-estudiantes',
  templateUrl: './aprobar-estudiantes.component.html',
  styleUrls: ['./aprobar-estudiantes.component.css']
})
export class AprobarEstudiantesComponent implements OnInit {

  estudiantes : Observable<Object>;
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.obtenerEstudiantesSinAprobar();
  }

  aprobarEstudiante(cedulaEstudiante) {
    this.http.post('http://localhost:3000/coordinador/estudianteAPractica',{cedula : cedulaEstudiante}).subscribe(data =>{

    });

    this.obtenerEstudiantesSinAprobar();
  }

  desaprobarEstudiante(cedulaEstudiante) {
    this.http.post('http://localhost:3000/coordinador//eliminarEstudiante',{cedula : cedulaEstudiante}).subscribe(data =>{

    });
    this.obtenerEstudiantesSinAprobar();

  }

  obtenerEstudiantesSinAprobar(){
    let cedulaCoordinador : string = sessionStorage.getItem('cedula');
    this.estudiantes = this.http.post('http://localhost:3000/coordinador/estudiantesSinAprobar',{cedulaCoordinador : cedulaCoordinador});
  }

  seleccionarEstudiante(cedulaEstudiante){
    sessionStorage.setItem('cedulaEstudiante', cedulaEstudiante);
    this.router.navigate(['coordinadores/estudiantes/estudianteSeleccionado']);

  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-asignar-profesor-practica',
  templateUrl: './asignar-profesor-practica.component.html',
  styleUrls: ['./asignar-profesor-practica.component.css']
})
export class AsignarProfesorPracticaComponent implements OnInit {

  formularioProfesor: FormGroup;
  profesores: Observable<Object>;


  constructor(private routes: Router,private http: HttpClient) { }

  ngOnInit() {

    this.obtenerProfesoresPractica();

    this.formularioProfesor = new FormGroup({
      'profesor': new FormControl(null,Validators.required)
    });
  }

  obtenerProfesoresPractica(){
    let cedulaCoordinador : string = sessionStorage.getItem('cedula');
    this.profesores = this.http.post('http://localhost:3000/coordinador/profesoresDePractica',{'cedulaCoordinador':cedulaCoordinador});
  }

  asignarProfesorPractica(){
    let cedulaEstudiante = sessionStorage.getItem('cedulaEstudiante');
    let cedulaProfesor = this.formularioProfesor.get('profesor').value;
    this.http.post('http://localhost:3000/coordinador/asignarProfesorPractica',{
      'cedulaProfesor': cedulaProfesor,
      'cedulaEstudiante': cedulaEstudiante
    }).subscribe(data =>{
      this.routes.navigate(['/coordinadores/estudiantes']);
    })
  }

}

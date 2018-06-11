import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-ver-estudiante',
  templateUrl: './ver-estudiante.component.html',
  styleUrls: ['./ver-estudiante.component.css']
})
export class VerEstudianteComponent implements OnInit {

  estudiantes: Observable<Object>;

  constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.obtenerEstudiantes()
  }

  obtenerEstudiantes(){
    let cedulaEstudiante = sessionStorage.getItem('cedulaEstudiante');
    this.estudiantes = this.http.post('http://localhost:3000/estudiante/seleccionarEstudiante',{'cedulaEstudiante':cedulaEstudiante});

  }

  limpiarImage(imagen){
    return this.sanitizer.bypassSecurityTrustUrl(imagen);
  }

}

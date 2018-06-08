import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-semestres',
  templateUrl: './semestres.component.html',
  styleUrls: ['./semestres.component.css']
})
export class SemestresComponent implements OnInit {

  semestres: Observable<Object>;
  nuevoNumeroSemestre: string;
  nuevoAno: string;

  constructor(private router : Router, private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {
    this.obtenerSemestre();
  }

  obtenerSemestre() {
    this.semestres = this.http.get('http://localhost:3000/semestres', {withCredentials: true})
      .map(function (x:any, idx) {
        for (let obj of x) {
          obj.edit = false;
        }
        return x;
      });
  }

  agregarSemestre() {
    this.http.post('http://localhost:3000/semestre/'+this.nuevoNumeroSemestre+'/' + this.nuevoAno, {}, {withCredentials: true})
      .subscribe(data => {
        this.obtenerSemestre();
      });
    this.nuevoAno = '';
    this.nuevoNumeroSemestre = '';
  }

  editar(semestre) {
    if (semestre.edit){
      this.enviarModificacion(semestre);
    }
    semestre.edit = !semestre.edit;
  }

  enviarModificacion(semestre) {
    this.http.post('http://localhost:3000/administrador/modificar-semestre', semestre, {withCredentials: true})
      .subscribe(data => {
        this.obtenerSemestre();
      })
  }
}

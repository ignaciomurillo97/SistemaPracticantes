import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  estudiante: Object;

  constructor(private router : Router, private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {
    this.obtenerEstudiante();
  }

  obtenerEstudiante() {
    this.http.get('http://localhost:3000/estudiante/', {withCredentials: true})
      .subscribe(data => {
        this.estudiante = data[0];
        console.log(this.estudiante);
      });
  }

  modificarEstudiante() {
    this.http.put('http://localhost:3000/estudiante/', this.estudiante, {withCredentials: true})
      .subscribe(data => {
        this.obtenerEstudiante();
      })
  }

}

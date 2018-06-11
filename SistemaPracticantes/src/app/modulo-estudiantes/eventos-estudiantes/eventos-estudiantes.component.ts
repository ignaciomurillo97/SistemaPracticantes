import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-eventos-estudiantes',
  templateUrl: './eventos-estudiantes.component.html',
  styleUrls: ['./eventos-estudiantes.component.css']
})
export class EventosEstudiantesComponent implements OnInit {

  eventos: Observable<Object>;

  constructor(private router : Router, private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {
    this.obtenerEventos();
  }

  obtenerEventos () {
    this.eventos = this.http.get('http://localhost:3000/modulo-estudiante');
  }

}

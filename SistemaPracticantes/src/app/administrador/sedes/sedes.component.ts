import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  sedes: Observable<Object>;
  idUniversidad: string;

  constructor(private router : Router, private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {
    this.obtenerSedes();
    this.idUniversidad = this.route.snapshot.paramMap.get('id');
  }

  view(id) {
     this.router.navigate(['administrador/sede', id]);
  }

  obtenerSedes() {
    this.sedes = this.http.get('http://localhost:3000/sede/1', {withCredentials: true})
  }

}

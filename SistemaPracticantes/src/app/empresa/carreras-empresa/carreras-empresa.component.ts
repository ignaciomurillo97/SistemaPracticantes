import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-carreras-empresa',
  templateUrl: './carreras-empresa.component.html',
  styleUrls: ['./carreras-empresa.component.css']
})
export class CarrerasEmpresaComponent implements OnInit {

  carrerasAsociadas: Observable<Object>;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.obtenerCarrerasAsociadas();
  }

  obtenerCarrerasAsociadas(){
    let cedulaContacto = sessionStorage.getItem('cedula');
    this.carrerasAsociadas = this.http.post('http://localhost:3000/empresa/obtenerCarrerasAsociadas',{'cedulaContacto':cedulaContacto});
  }

}

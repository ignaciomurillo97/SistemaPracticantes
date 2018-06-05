import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-empresas-aprobadas',
  templateUrl: './empresas-aprobadas.component.html',
  styleUrls: ['./empresas-aprobadas.component.css']
})
export class EmpresasAprobadasComponent implements OnInit {

  empresas: Observable<Object>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerEmpresasAprobadas();
  }

  obtenerEmpresasAprobadas(){
    let cedulaCoordinador: string = sessionStorage.getItem('cedula');
    this.empresas = this.http.post('http://localhost:3000/coordinador/empresasAprobadas',{'cedulaCoordinador': cedulaCoordinador});
  }

}

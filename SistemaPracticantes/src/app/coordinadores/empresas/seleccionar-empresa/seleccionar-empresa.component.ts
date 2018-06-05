import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-seleccionar-empresa',
  templateUrl: './seleccionar-empresa.component.html',
  styleUrls: ['./seleccionar-empresa.component.css']
})
export class SeleccionarEmpresaComponent implements OnInit {

  empresas:Observable<Object>;
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.obtenerEmpresa();
  }

  obtenerEmpresa(){
    let cedulaJuridica = sessionStorage.getItem('cedulaJuridicaEmpresaSeleccionada');
    let cedulaCoordinador = sessionStorage.getItem('cedula');
  this.empresas =   this.http.post('http://localhost:3000/coordinador/seleccionarEmpresa',{
      'cedulaCoordinador': cedulaCoordinador,
      'cedulaJuridica': cedulaJuridica
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  //booleanos para saber cual componente cargar
  aprobarEmpresas: boolean;
  empresasAprobadas: boolean;

  constructor() {
    this.aprobarEmpresas = false;
    this.empresasAprobadas = true;
  }

  ngOnInit() {
  }

  componenteEmpresasAprobadas(){
    this.aprobarEmpresas = false;
    this.empresasAprobadas = true;
  }

  componenteAprobarEmpresas() {
    this.aprobarEmpresas = true;
    this.empresasAprobadas = false;
  }

}

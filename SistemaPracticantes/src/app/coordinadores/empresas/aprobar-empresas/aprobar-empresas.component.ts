import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-aprobar-empresas',
  templateUrl: './aprobar-empresas.component.html',
  styleUrls: ['./aprobar-empresas.component.css']
})
export class AprobarEmpresasComponent implements OnInit {

  empresas: Observable<Object>;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.obtenerEmpresasSinAprobar();
  }

  obtenerEmpresasSinAprobar(){
    let cedulaCoordinador: string = sessionStorage.getItem('cedula');
    this.empresas = this.http.post('http://localhost:3000/coordinador/empresasSinAprobar',{'cedulaCoordinador':cedulaCoordinador})
  }

  aprobarEmpresa(cedulaJuridica){
    let cedulaCoordinador: string = sessionStorage.getItem('cedula');
    this.http.post('http://localhost:3000/coordinador/aprobarEmpresaACarrera',{'cedulaJuridica':cedulaJuridica,'cedulaCoordinador':cedulaCoordinador})
      .subscribe(data =>{

      });
    this.obtenerEmpresasSinAprobar();

  }

  desaprobarEmpresa(cedulaJuridica){
    let cedulaCoordinador: string = sessionStorage.getItem('cedula');
    this.http.post('http://localhost:3000/coordinador/eliminarEmpresaDeCarrera',{'cedulaJuridica':cedulaJuridica,'cedulaCoordinador':cedulaCoordinador})
      .subscribe(data =>{

      });
    this.obtenerEmpresasSinAprobar();
  }

  seleccionarEmpresa(cedulaJuridica){
    sessionStorage.setItem('cedulaJuridicaEmpresaSeleccionada',cedulaJuridica);
    this.router.navigate(['/coordinadores/empresas/empresaSeleccionada']);
  }

}

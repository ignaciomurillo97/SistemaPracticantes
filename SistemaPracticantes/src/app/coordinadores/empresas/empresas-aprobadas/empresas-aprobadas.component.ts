import {Component, destroyPlatform, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-empresas-aprobadas',
  templateUrl: './empresas-aprobadas.component.html',
  styleUrls: ['./empresas-aprobadas.component.css']
})
export class EmpresasAprobadasComponent implements OnInit {

  empresas: Observable<Object>;

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.obtenerEmpresasAprobadas();
  }

  obtenerEmpresasAprobadas(){
    let cedulaCoordinador: string = sessionStorage.getItem('cedula');
    this.empresas = this.http.post('http://localhost:3000/coordinador/empresasAprobadas',{'cedulaCoordinador': cedulaCoordinador});
  }

  eliminarEmpresa(cedulaJuridica){
    let cedulaCoordinador: string = sessionStorage.getItem('cedula');
    this.http.post('http://localhost:3000/coordinador/eliminarEmpresaDeCarrera',{'cedulaJuridica':cedulaJuridica,'cedulaCoordinador':cedulaCoordinador})
      .subscribe(data =>{

      });
    this.obtenerEmpresasAprobadas();
  }

  seleccionarEmpresa(cedulaJuridica){
    sessionStorage.setItem('cedulaJuridicaEmpresaSeleccionada',cedulaJuridica);
    this.router.navigate(['/coordinadores/empresas/empresaSeleccionada']);
  }

}

import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enviar-solicitud',
  templateUrl: './enviar-solicitud.component.html',
  styleUrls: ['./enviar-solicitud.component.css']
})
export class EnviarSolicitudComponent implements OnInit {

  universidades: Observable<Object>;
  sedes: Observable<Object>;
  carreras: Observable<Object>;

  formularioSolicitudEmpresa: FormGroup;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.obtenerUniversidades();

    this.formularioSolicitudEmpresa = new FormGroup({
      'universidad' : new FormControl(null, Validators.required),
      'sede': new FormControl(null, Validators.required),
      'carrera': new FormControl(null, Validators.required)
    });

  }

  obtenerUniversidades() {
    this.universidades = this.http.get('http://localhost:3000/estudiante/universidades');
  }

  obtenerSedes(){
    let idUniversidad = this.formularioSolicitudEmpresa.get('universidad').value;
    this.sedes = this.http.post('http://localhost:3000/estudiante/sedes',{idUniversidad: idUniversidad});
  }

  obtenerCarreras(){
    let idSede = this.formularioSolicitudEmpresa.get('sede').value;
    this.carreras = this.http.post('http://localhost:3000/estudiante/carreras',{idSede: idSede});
  }

  enviarSolicitud(){
    let solicitudvalida : boolean = this.formularioSolicitudEmpresa.valid;
    if(solicitudvalida){
      let cedulaContacto = sessionStorage.getItem('cedula');
      let idCarrera = this.formularioSolicitudEmpresa.get('carrera').value;

      this.http.post('http://localhost:3000/empresa/solicitudEmpresaACarrera',{
        'cedulaContacto': cedulaContacto,
        'idCarrera': idCarrera
      }).subscribe(
        data =>{
          this.router.navigate(['empresa/carrerasEmpresa']);
        }
      )
    }


  }
}

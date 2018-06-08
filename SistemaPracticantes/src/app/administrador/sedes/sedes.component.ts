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

  nuevoNombreSede: string;
  nuevaUbicacion: string;

  constructor(private router : Router, private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {
    this.idUniversidad = this.route.snapshot.paramMap.get('id');
    this.obtenerSedes();
    this.validarCredenciales();
  }

  view(idSede, nombreSede) {
    this.router.navigate(['administrador/sede', idSede, nombreSede]);
  }

  editarSede(sede) {
    if (sede.edit) {
      this.enviarModificacion(sede);
    }
    sede.edit = !sede.edit;
  }

  enviarModificacion(sede) {
    this.http.put('http://localhost:3000/administrador/modificar-sede', sede, {withCredentials: true})
      .subscribe(data => {
        console.log('formulario enviado');
      })
  }

  agregarSede() {
    let nuevaSede = {NombreSede:this.nuevoNombreSede, Ubicacion:this.nuevaUbicacion, IdUniversidad:this.idUniversidad};
    this.http.post('http://localhost:3000/administrador/agregar-sede', nuevaSede, {withCredentials: true})
      .subscribe(data => {
        this.obtenerSedes();
        this.nuevoNombreSede = "";
        this.nuevaUbicacion = "";
      })
  }

  obtenerSedes() {
    this.sedes = this.http.get('http://localhost:3000/sede/'+this.idUniversidad, {withCredentials: true})
      .map(function (x:any, idx) {
        for (let obj of x) {
          obj.edit = false;
        }
        return x;
      });
  }

  validarCredenciales() {
    this.http.get('http://localhost:3000/administrador/validar-credenciales', {withCredentials: true})
      .subscribe(data => {
        this.checkCreds(data);
      });
  }
  
  checkCreds(response) {
    if (!response.autorizado){
      this.router.navigate(['/']);
    }
  }
}

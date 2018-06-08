import {
  ViewChild,
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})

export class CarrerasComponent implements OnInit {

  carreras: Observable<Object>;
  @Input() idSede: string;
  nuevoNombreCarrera: string;

  constructor(private router : Router, private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {
    this.idSede = this.route.snapshot.paramMap.get('id');
    this.obtenerCarreras(this.idSede);
    this.validarCredenciales();
  }

  editarCarrera(carrera) {
    if (carrera.edit) {
      carrera.edit = false;
      this.enviarModificacion(carrera);
    } else {
      carrera.edit = true;
    }
  }

  enviarModificacion(carrera) {
    this.http.put('http://localhost:3000/administrador/modificar-carrera', carrera, {withCredentials: true})
      .subscribe(data => {
         this.obtenerCarreras(this.idSede);
      })
  }

  agregarCarrera() {
    console.log(this.nuevoNombreCarrera);
    this.http.post('http://localhost:3000/administrador/agregar-carrera/'+this.idSede+'/'+this.nuevoNombreCarrera, {}, {withCredentials: true})
      .subscribe(data => {
         this.nuevoNombreCarrera = '';
         this.obtenerCarreras(this.idSede);
      })
  }

  obtenerCarreras(idCarrera) {
    this.carreras = this.http.get('http://localhost:3000/carrera/' + idCarrera, {withCredentials: true})
      .map(function (x:any, idx) {
        for (let obj of x) {
          obj.edit = false;
        }
        console.log(x);
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

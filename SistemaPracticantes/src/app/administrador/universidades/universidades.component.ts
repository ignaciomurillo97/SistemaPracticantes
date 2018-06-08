import {
  ViewChild,
  Component,
  OnInit
} from '@angular/core';

import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.component.html',
  styleUrls: ['./universidades.component.css']
})
export class UniversidadesComponent implements OnInit {

  universidades: Observable<Object>;
  nombreNuevaUniversidad: string;
  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit() {
    this.obtenerUniversidades();
    this.validarCredenciales();
  }

  add() {
    if (this.nombreNuevaUniversidad != "") {
      let universidad = {NombreUniversidad : this.nombreNuevaUniversidad}
      this.http.post('http://localhost:3000/administrador/agregar-universidad', universidad, {withCredentials: true})
        .subscribe(data => {
          this.nombreNuevaUniversidad = '';
          this.obtenerUniversidades();
        })
    }
  }

  edit(universidad) {
    if (universidad.edit) {
      this.enviarModificacion(universidad);
    }
    universidad.edit = !universidad.edit;
  }

  enviarModificacion(universidad) {
    this.http.put('http://localhost:3000/administrador/modificar-universidad', universidad, {withCredentials: true})
      .subscribe(data => {
        console.log('ola k ase');
        this.obtenerUniversidades();
      })
  }

  view(id) {
    this.router.navigate(['administrador/universidad', id]);
  }

  obtenerUniversidades() {
    this.universidades = this.http.get('http://localhost:3000/universidad', {withCredentials: true})
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

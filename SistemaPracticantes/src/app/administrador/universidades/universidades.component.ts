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
  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit() {
    this.obtenerUniversidades();
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
        console.log('formulario enviado');
      })
  }

  view() {
    this.router.navigate(['administrador/universidad'])
  }

  obtenerUniversidades() {
     this.universidades = this.http.get('http://localhost:3000/universidad', {withCredentials: true})
      .map(function (x:any, idx) {
        for (let obj of x) {
          obj.edit = false;
        }
        console.log(x);
        return x;
      });
  }

}

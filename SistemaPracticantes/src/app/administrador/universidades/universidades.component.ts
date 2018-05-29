import { 
  ViewChild,
  Component,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  edit() {
    this.router.navigate(['administrador/editar-universidad']);
  }

  view() {
    this.router.navigate(['administrador/universidad'])
  }

  obtenerUniversidades() {
    this.universidades = this.http.get('http://localhost:3000/administrador/universidad', {withCredentials: true})
  }

}

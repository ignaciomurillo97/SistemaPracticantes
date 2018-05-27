import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.component.html',
  styleUrls: ['./universidades.component.css']
})
export class UniversidadesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit() {
     this.router.navigate(['administrador/editar-universidad']);
  }

   view() {
     this.router.navigate(['administrador/universidad'])
   }

}

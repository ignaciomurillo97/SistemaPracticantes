import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-administrar-coordinadores',
  templateUrl: './administrar-coordinadores.component.html',
  styleUrls: ['./administrar-coordinadores.component.css']
})
export class AdministrarCoordinadoresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  change() {
     this.router.navigate(['administrador/editar-coordinadores']);
  }

}

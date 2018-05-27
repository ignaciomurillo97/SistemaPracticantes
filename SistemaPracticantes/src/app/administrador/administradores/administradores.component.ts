import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  change() {
     this.router.navigate(['administrador/editar-administradores']);
  }
}

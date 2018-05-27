import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  view() {
     this.router.navigate(['administrador/sede']);
  }

}

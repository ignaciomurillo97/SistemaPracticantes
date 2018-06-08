import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css']
})
export class UniversidadComponent implements OnInit {

  idUniversidad:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.idUniversidad = this.route.snapshot.paramMap.get('id');
  }

}

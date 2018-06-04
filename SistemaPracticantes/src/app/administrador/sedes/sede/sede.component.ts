import { ViewChild, Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})

export class SedeComponent implements OnInit {

  idSede: string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.idSede = this.route.snapshot.paramMap.get('id');
  }

}

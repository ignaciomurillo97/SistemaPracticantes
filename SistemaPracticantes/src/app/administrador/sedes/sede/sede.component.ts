import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})

export class SedeComponent implements OnInit {

  sedeId: string;
  sedeNombre: string;

  constructor(private router : Router, private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {
    this.sedeId = this.route.snapshot.paramMap.get('id');
    this.sedeNombre = this.route.snapshot.paramMap.get('nombreSede')
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universidad-card',
  templateUrl: './universidad-card.component.html',
  styleUrls: ['./universidad-card.component.css']
})
export class UniversidadCardComponent implements OnInit {

  constructor() { }

  nombreUniversidad :string = "ITCR";

  ngOnInit() {
  }

}

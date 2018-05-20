import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css']
})
export class AgregarEventoComponent implements OnInit {

  formularioEvento: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

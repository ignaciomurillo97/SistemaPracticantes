import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar-universidad',
  templateUrl: './editar-universidad.component.html',
  styleUrls: ['./editar-universidad.component.css']
})
export class EditarUniversidadComponent implements OnInit {

  formularioUniversidad: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formularioUniversidad = new FormGroup({
      'nombre' : new FormControl(null, [Validators.required]),
    })
  }

}

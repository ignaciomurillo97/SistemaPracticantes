import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  formularioEmpresa: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formularioEmpresa = new FormGroup({
      'cedulaJuridica' : new FormControl(null, [Validators.min(10000000),
        Validators.max(9999999999), Validators.required]),
      'nombreEmpresa' : new FormControl(null,Validators.required)
    })
  }

}

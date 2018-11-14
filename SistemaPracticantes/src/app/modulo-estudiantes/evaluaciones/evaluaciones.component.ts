import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent implements OnInit {

  formularioEvaluacion: FormGroup;

  constructor(private router : Router, private http:HttpClient) { }

  ngOnInit() {
    this.formularioEvaluacion = new FormGroup({
      'empresa': new FormControl(null, [Validators.required]),
      'profesorAsesor': new FormControl(null, [Validators.required]),
      'eventoVinculacion': new FormControl(null, [Validators.required]),
      'eventoVinculacionMejora': new FormControl(null, [Validators.required]),
      'anteproyecto': new FormControl(null, [Validators.required]),
      'anteproyectoMejora': new FormControl(null, [Validators.required]),
      'coordinador': new FormControl(null, [Validators.required]),
      'coordinadorMejora': new FormControl(null, [Validators.required]),
      'asesor': new FormControl(null, [Validators.required]),
      'asesorMejora': new FormControl(null, [Validators.required]),
      'calificaconEmpresa': new FormControl(null, [Validators.required]),
      'practicaGeneral': new FormControl(null, [Validators.required]),
      'visitasAsesor': new FormControl(null, [Validators.required]),
      'mejoraGeneral': new FormControl(null, [Validators.required]),
    });
  }

  enviarEvaluacion() {
  }



}

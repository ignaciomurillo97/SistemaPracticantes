import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-evaluacion-coordinador',
  templateUrl: './evaluacion-coordinador.component.html',
  styleUrls: ['./evaluacion-coordinador.component.css']
})
export class EvaluacionCoordinadorComponent implements OnInit {
  formularioEvaluacion: FormGroup;
  generos =  ['Masculino', 'Femenino'];
  opciones = ['Malo', 'Regular', 'Bueno', 'Muy Bueno', 'Excelente'];
  visitas = ['1', '2', '3', '4'];
  asesores: Observable<object>;

  cedulaAsesor: string;


  constructor(private router : Router, private http:HttpClient, private route:ActivatedRoute) { }

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
    })
    this.getCoordinadores();
  }

  getCoordinadores() {
    this.asesores = this.http.get('http://localhost:3000/estudiante/coordinadores')
  }

  enviarEvaluacion() {
    this.http.post('http://localhost:3000/estudiante/evaluacion/' + this.cedulaAsesor, this.formularioEvaluacion, {withCredentials: true})
  }
}

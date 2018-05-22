import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
   selector: 'app-editar-coordinadores',
   templateUrl: './editar-coordinadores.component.html',
   styleUrls: ['./editar-coordinadores.component.css']
})
export class EditarCoordinadoresComponent implements OnInit {

   formularioCoodrinador: FormGroup;
   universidades = ["ITCR", "UCR", "UNA"]
   sedes = ["Cartago", "San José", "Alajuela", "Limón"]
   carreras = ["Ingeniería en Computación", "Arquitectura y Ubranismo", "Administración de Empresas"];

   constructor() { }

   ngOnInit() {
      this.formularioCoodrinador = new FormGroup({
      'opcionUniversidad': new FormControl(null, [Validators.required]),
      'opcionSede': new FormControl(null, [Validators.required]),
      'opcionCarrera': new FormControl(null, [Validators.required]),
    })
   }

   universidadSeleccionada() {
      document.getElementById("opcionSede").disabled = false;
   }

   sedeSeleccionada() {
      document.getElementById("opcionCarrera").disabled = false;
   }

}

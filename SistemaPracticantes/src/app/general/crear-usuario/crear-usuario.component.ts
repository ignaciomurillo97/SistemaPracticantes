import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  formularioUsuario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formularioUsuario = new FormGroup({
      'nombreDeUsuario': new FormControl(null, [Validators.required]),
      'contraseña': new FormControl(null, Validators.required),
      'confirmarContraseña': new FormControl(null, [Validators.required,
                                                    this.validacionContraseña.bind(this)])
    });
  }

  validacionContraseña(control : FormControl) {
    if(this.formularioUsuario !== undefined){
      const contraseña = this.formularioUsuario.get('contraseña').value;
      const confirmarContraseña = control.value;
      if(contraseña !== confirmarContraseña){
        return { 'contraseñaNoIgual': true };
      }
      return null;
    }
    return null;

  }

}

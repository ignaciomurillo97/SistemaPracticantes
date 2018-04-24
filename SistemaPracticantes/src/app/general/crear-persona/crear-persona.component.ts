import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  formularioPersona: FormGroup;
  generos =  ['Masculino', 'Femenino'];

  constructor() { }

  ngOnInit() {
    this.formularioPersona = new FormGroup({
      'nombre': new FormControl(null, [Validators.required]),
      'primerApellido': new FormControl(null, [Validators.required]),
      'segundoApellido': new FormControl(null, [Validators.required]),
      'cedula': new FormControl(null, [Validators.required, Validators.max(999999999), Validators.min(100000000)]),
      'genero': new FormControl('Masculino'),
      'numerosContacto': new FormArray([
        this.constructorNumero()
      ]),
      'correosContacto': new FormArray([
        this.constructorCorreo()
      ])
    })

  }

  constructorNumero(){
    return new FormControl(null, [Validators.required,
                                  Validators.max(99999999),
                                  Validators.min(10000000),
                                  this.numerosRepetidos.bind(this)
    ]);
  }

  constructorCorreo() {
    return new FormControl(null, [Validators.required,
                                  Validators.email,
                                  this.correosRepetidos.bind(this)
    ]);
  }

  agregarEntrada(nombreControl : string) {
    const nuevaEntrada = ( nombreControl === 'numerosContacto' ?
                           this.constructorNumero() : this.constructorCorreo() ); //se escoge el tipo de control a agregar y se crea

    const control = (<FormArray>this.formularioPersona.get(nombreControl)); //castea el array de controles para modificarlo
    control.push(nuevaEntrada);
  }

  eliminarEntrada(indice : number, nombreControl : string) {
    const control = (<FormArray>this.formularioPersona.get(nombreControl));

    if(control.length > 1){ //en caso de que solo haya una entrada para el numero de contacto
      control.removeAt(indice);
    }
  }

  buscarDuplicado(arreglo : FormArray, elemento : any ) : boolean {
    //funcion que busca duplicados en el arreglo

    let count = 0;
    for( let i = 0; i < arreglo.length; i++){

      console.log(arreglo.at(i).value);
      if(arreglo.at(i).value === elemento){
        count++;
        if(count >= 2){
          return true;
        }
      }
    }
    return false;
  }

  numerosRepetidos(control : FormControl) {
    if(this.formularioPersona !== undefined){
      const arreglo = (<FormArray>this.formularioPersona.get('numerosContacto'));
      if(arreglo.length > 1){
        const valor = control.value;

        const duplicado = this.buscarDuplicado(arreglo, valor );
        if(duplicado){

          return { 'numeroRepetido': true };
        }
        return null;
      }

    }
    return null;
  }


  correosRepetidos(control : FormControl) {
    if(this.formularioPersona !== undefined){
      const arreglo = (<FormArray>this.formularioPersona.get('correosContacto'));
      if(arreglo.length > 1){
        const valor = control.value;

        const duplicado = this.buscarDuplicado(arreglo, valor );
        if(duplicado){

          return { 'correoRepetido': true };
        }
        return null;
      }

    }
    return null;
  }


}

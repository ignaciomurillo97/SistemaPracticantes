import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormArray} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.component.html',
  styleUrls: ['./agregar-evento.component.css']
})
export class AgregarEventoComponent implements OnInit {

  formularioEvento: FormGroup;
  nombreArchivo: string;
  archivoSeleccionado: File;
  formatoArchivoCorrecto : boolean = true;
  formatosPermitidos: string[] = ['jpg', 'jpeg', 'png' , 'svg'];
  ingresoArchivo: boolean = false;
  formatoArchivo: string;
  error:string;

  tiposDeEvento: Observable<Object>;

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.obtenerTiposDeEvento();

    this.formularioEvento = new FormGroup({
      'diaEvento' : new FormControl(null,[Validators.required]),
      'horaInicioEvento': new FormControl(null, Validators.required),
      'foto': new FormControl(null, Validators.required),
      'horaFinEvento': new FormControl(null, [Validators.required
                                          ,this.verificarHoraFinEvento.bind(this)]),
      'tipoEvento': new FormControl(null, Validators.required),
      'horaActividades': new FormArray([this.constructorHoraInicio(),this.constructorHoraFin()])
    });
  }

  verificarHoraFinEvento(control:FormControl){
    if(this.formularioEvento != undefined){
      const horaInicioEvento = this.formularioEvento.get('horaInicioEvento').value;
      const horaFinEvento = control.value;

      if(horaInicioEvento > horaFinEvento){
        return { 'horaInicioErronea': true };
      }
      return null;
    }
    return null;
  }

  obtenerTiposDeEvento(){
    this.tiposDeEvento = this.http.get('http://localhost:3000/coordinador/obtenerTiposDeEvento');
  }


  cambioEnArchivo(event) {
    //funcion para verificar que se ingreso algo en el campo foto y ademas verificar el tipo de dato
    //del mismo archivo

    this.ingresoArchivo = true;
    this.archivoSeleccionado = event.target.files[0];
    this.nombreArchivo = this.archivoSeleccionado.name;
    this.formatoArchivo = this.nombreArchivo.split('.')[1].toLowerCase();
    if( this.formatosPermitidos.indexOf(this.formatoArchivo) === -1 ){
      this.formatoArchivoCorrecto = false;
      this.formularioEvento.get('foto').setValue(this.archivoSeleccionado);
    }
    else {
      this.formatoArchivoCorrecto = true;
    }
  }

  constructorHoraInicio(){
    return new FormControl(null, [Validators.required,
                                                        this.verificarHoraInicioActividades.bind(this),
                                                        this.verificarHoraActividadAnterior.bind(this)]);
  }

  constructorHoraFin(){
    return new FormControl(null, [Validators.required,
                                                        this.verificarHoraActividadAnterior.bind(this),
                                                        this.verificarHoraFinActividades.bind(this)]);
  }


  agregarEntrada() {

    const horaInicio = this.constructorHoraInicio();
    const horaFin = this.constructorHoraFin();

    const control = (<FormArray>this.formularioEvento.get('horaActividades')); //castea el array de controles para modificarlo
    control.push(horaInicio);
    control.push(horaFin);
  }

  eliminarEntrada(indice : number) {
    const control = (<FormArray>this.formularioEvento.get('horaActividades'));

    if(control.length > 2){ //en caso de que solo haya una entrada para el numero de contacto
      control.removeAt(indice);
      control.removeAt(indice - 1);
    }
  }

  verificarHoraInicioActividades(control:FormControl){

    if(this.formularioEvento !== undefined){
      let indiceControl = this.getIndex(control);

      if(indiceControl === 0){
        //en caso de que el control sea el primero de la lista tiene que ser minimo la hora de inicio del evento
        const horaInicioEvento = this.formularioEvento.get('horaInicioEvento').value;
        const horaInicioActividades = control.value;
        const horaFinActividades = this.formularioEvento.get('horaFinEvento').value;
        if(horaInicioEvento > horaInicioActividades){
          return {'horaInicioActividadErronea' : true};
        }
        else if( horaInicioActividades > horaFinActividades ){
          return {'horaInicioActividadErroneaFin' : true};
        }
      }
      return null;
    }
    return null;
  }

  verificarHoraFinActividades(control:FormControl){

    if(this.formularioEvento !== undefined){
      let indiceControl = this.getIndex(control);
      const largoArregloControles = (<FormArray>this.formularioEvento.get('horaActividades')).length;

      if(indiceControl === largoArregloControles - 1){
        //en caso de que el control sea el primero de la lista tiene que ser minimo la hora de inicio del evento
        const horaFinEvento = this.formularioEvento.get('horaFinEvento').value;
        const horaFinActividades = control.value;
        if(horaFinEvento < horaFinActividades){
          return {'horaFinActividadErronea' : true};
        }
      }
      return null;
    }
    return null;
  }

  verificarHoraActividadAnterior(control : FormControl){
    if(this.formularioEvento !== undefined) {
      let indiceControl = this.getIndex(control);

      if(indiceControl > 0){
        //en caso de que no sea el primero elemento ya que sino al acceder al indice anterior da error
        let valorControlAnterior = (<FormArray>this.formularioEvento.get('horaActividades')).at(indiceControl - 1).value;
        let valorControl = control.value;

        if(valorControl < valorControlAnterior){
          return {'actividadAnteriorErronea':true};
        }
        return null;
      }
    }
    return null;
  }

  getIndex(control : FormControl){
    const horarioActidades = (<FormArray>this.formularioEvento.get('horaActividades'));

    for(let i = 0; i < horarioActidades.length ; i++){
      if(horarioActidades.at(i) === control){
        return i;
      }
    }
  }

  crearEvento() {
    let formularioValido = this.formularioEvento.valid && this.formatoArchivoCorrecto;

    if(formularioValido){
      let diaEvento: string = this.formularioEvento.get('diaEvento').value;
      let horaInicioEvento: string = this.formularioEvento.get('horaInicioEvento').value;
      let horaFinEvento: string = this.formularioEvento.get('horaFinEvento').value;
      let tipoEvento: number = this.formularioEvento.get('tipoEvento').value;
      let horas: string[] = this.formularioEvento.get('horaActividades').value;
      let horasActividades: Object[] = [];
      let cedulaCoordinador = sessionStorage.getItem('cedula');

      for (let i = 0; i < horas.length; i += 2) {
        let json = {"horaInicio": horas[i], "horaFin": horas[i + 1]};
        horasActividades.push(json);
      }

      this.convertirImagen(this.archivoSeleccionado).then( (imagenConvertida) => {
        let foto = imagenConvertida;
        console.log(imagenConvertida);
        let datos = {
          "horaInicio" : horaInicioEvento,
          "horaFin" : horaFinEvento,
          "cedulaCoordinador" : cedulaCoordinador,
          "dia" : diaEvento,
          "tipoEvento" : tipoEvento,
          "listaActividades" : horasActividades,
          "foto": foto
        };
        this.http.post('http://localhost:3000/coordinador/crearEvento',datos).subscribe(data => {
          this.router.navigate(['coordinadores/eventos']);
        });
      });
    }
    else {
      this.error = 'Ingrese los datos necesarios';
    }
  }

  convertirImagen(archivoSeleccionado : File){
    //funcion para convertir un archivo a base64
    return new Promise(function (resolve,reject) {
      let reader = new FileReader();
      let archivo;
      reader.onloadend = (e) => {
        archivo = reader.result;
        resolve(archivo);
      };
      reader.readAsDataURL(archivoSeleccionado);
    });
  }

}

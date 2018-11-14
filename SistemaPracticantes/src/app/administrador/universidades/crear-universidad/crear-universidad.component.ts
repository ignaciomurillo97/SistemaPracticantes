import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-crear-universidad',
  templateUrl: './crear-universidad.component.html',
  styleUrls: ['./crear-universidad.component.css']
})
export class CrearUniversidadComponent implements OnInit {

  formularioUniversidad: FormGroup;


  constructor(private router : Router, private http:HttpClient) { }

  ngOnInit() {
    this.formularioUniversidad = new FormGroup({
      'universidad': new FormControl(null, [Validators.required])
    });

  }

  crearUniversidad() {

    if(!this.formularioUniversidad.get('universidad').valid && this.formularioUniversidad.get('universidad').touched){

      let universidad = {NombreUniversidad : this.formularioUniversidad.get('universidad').value}
      this.http.post('http://localhost:3000/administrador/agregar-universidad', universidad, {withCredentials: true})
        .subscribe(data => {
          this.router.navigate(['administrador/universidades'])
        })

    }



  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-crear-semestre',
  templateUrl: './crear-semestre.component.html',
  styleUrls: ['./crear-semestre.component.css']
})
export class CrearSemestreComponent implements OnInit {

  formSemester: FormGroup;

  constructor(private router : Router, private http:HttpClient) { }

  ngOnInit() {
    this.formSemester = new FormGroup({
      'year': new FormControl(null, [Validators.required, Validators.min(2017)]),
      'semesterNumber': new FormControl(null, Validators.required)
    });
  }

  agregarSemestre() {
    if(this.formSemester.valid && !this.formSemester.touched){
      let año = this.formSemester.get('year').value;
      let numeroSemestre = this.formSemester.get('semesterNumber').value;


      this.http.post('http://localhost:3000/semestre/'+numeroSemestre+'/' + año, {}, {withCredentials: true})
        .subscribe(data => {
          this.router.navigate(['administrador/semestres'])
        });
    }
  }

}

import { Component, OnInit, ElementRef } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

declare const $: any;

@Component({
  selector: 'app-modulo-estudiantes',
  templateUrl: './modulo-estudiantes.component.html',
  styleUrls: ['./modulo-estudiantes.component.css']
})
export class ModuloEstudiantesComponent implements OnInit {

  private sidebarVisible: boolean;
  private toggleButton: any;

  constructor(private element: ElementRef, private router : Router, private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    $.material.init();
    const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
    const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
    //this.validarCredenciales();
  }
   
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(function(){
      toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');

    this.sidebarVisible = true;
  };
  sidebarClose() {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  };
  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  cerrarSesion(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}

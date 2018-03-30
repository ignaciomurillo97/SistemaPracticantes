import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinadoresComponent} from './coordinadores/coordinadores.component';
import {EmpresasComponent} from './coordinadores/empresas/empresas.component';
import {DocumentosComponent} from './coordinadores/documentos/documentos.component';
import {AgregarDocumentoComponent} from './coordinadores/documentos/agregar-documento/agregar-documento.component';
import {AprobarEmpresasComponent} from './coordinadores/empresas/aprobar-empresas/aprobar-empresas.component';
import {DesaprobarEmpresaComponent} from './coordinadores/empresas/desaprobar-empresa/desaprobar-empresa.component';
import {EstadisticasComponent} from './coordinadores/estadisticas/estadisticas.component';
import {EstudiantesComponent} from './coordinadores/estudiantes/estudiantes.component';
import {AprobarEstudiantesComponent} from './coordinadores/estudiantes/aprobar-estudiantes/aprobar-estudiantes.component';
import {ProfesoresComponent} from './coordinadores/profesores/profesores.component';
import {EventosComponent} from './coordinadores/eventos/eventos.component';
import {LoginComponent} from './login/login.component';
import {AgregarProfesorComponent} from './coordinadores/profesores/agregar-profesor/agregar-profesor.component';

const rutas: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'coordinadores', component: CoordinadoresComponent, children:[
    { path: '', redirectTo: 'estadisticas', pathMatch: 'full'},

    { path: 'documentos', children:[
      { path: '', component: DocumentosComponent},
      { path: 'agregarDocumento', component: AgregarDocumentoComponent }
    ] },


    { path: 'empresas', component: EmpresasComponent },
    { path: 'aprobarEmpresa', component: AprobarEmpresasComponent },
    { path: 'desaprobarEmpresa', component: DesaprobarEmpresaComponent },

    { path: 'estadisticas', component: EstadisticasComponent },

    { path: 'estudiantes', children:[
      { path: '', component: EstudiantesComponent},
      { path: 'aprobarEstudiantes', component: AprobarEstudiantesComponent },
    ] },


    { path: 'profesores', children:[
      { path: '', component: ProfesoresComponent},
      { path: 'agregarProfesor', component: AgregarProfesorComponent}
    ] },


    { path: 'eventos', component: EventosComponent}

  ]}
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule]
})

export class AppRutasModulo {

}

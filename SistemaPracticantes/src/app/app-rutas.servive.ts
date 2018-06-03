import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CoordinadoresComponent} from './coordinadores/coordinadores.component';
import {EmpresasComponent} from './coordinadores/empresas/empresas.component';
import {DocumentosComponent} from './coordinadores/documentos/documentos.component';
import {AgregarDocumentoComponent} from './coordinadores/documentos/agregar-documento/agregar-documento.component';
import {AprobarEmpresasComponent} from './coordinadores/empresas/aprobar-empresas/aprobar-empresas.component';
import {EstadisticasComponent} from './coordinadores/estadisticas/estadisticas.component';
import {EstudiantesComponent} from './coordinadores/estudiantes/estudiantes.component';
import {AprobarEstudiantesComponent} from './coordinadores/estudiantes/aprobar-estudiantes/aprobar-estudiantes.component';
import {ProfesoresComponent} from './coordinadores/profesores/profesores.component';
import {EventosComponent} from './coordinadores/eventos/eventos.component';
import {LoginComponent} from './login/login.component';
import {AgregarProfesorComponent} from './coordinadores/profesores/agregar-profesor/agregar-profesor.component';
import {RegistroEmpresaComponent} from './login/registro-empresa/registro-empresa.component';
import {RegistroEstudianteComponent} from './login/registro-estudiante/registro-estudiante.component';
import {AgregarEventoComponent} from './coordinadores/eventos/agregar-evento/agregar-evento.component';

// Administrador
import {AdministradorComponent} from './administrador/administrador.component';
import {UniversidadesComponent} from './administrador/universidades/universidades.component';
import {SedesComponent} from './administrador/sedes/sedes.component';
import {SedeComponent} from './administrador/sedes/sede/sede.component';
import {CarrerasComponent} from './administrador/carreras/carreras.component';
import {AdministradoresComponent} from './administrador/administradores/administradores.component';
import {EditarAdministradoresComponent} from './administrador/administradores/editar-administradores/editar-administradores.component';
import {EditarUniversidadComponent} from './administrador/editar-universidad/editar-universidad.component';
import {UniversidadComponent} from './administrador/universidades/universidad/universidad.component';
import {AdministrarCoordinadoresComponent} from './administrador/administrar-coordinadores/administrar-coordinadores.component';
import {EditarCoordinadoresComponent} from './administrador/editar-coordinadores/editar-coordinadores.component';

const rutas: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', children: [
      { path: '', component: LoginComponent, pathMatch: 'full'},
      { path: 'registroEmpresa', component: RegistroEmpresaComponent},
      { path: 'registroEstudiante', component: RegistroEstudianteComponent}
    ]},
  { path: 'coordinadores', component: CoordinadoresComponent, children:[
    { path: '', redirectTo: 'estadisticas', pathMatch: 'full'},

    { path: 'documentos', children:[
      { path: '', component: DocumentosComponent},
      { path: 'agregarDocumento', component: AgregarDocumentoComponent }
    ] },


    { path: 'empresas', children:[
      { path: '', component: EmpresasComponent},
      { path: 'aprobarEmpresa', component: AprobarEmpresasComponent }
    ] },


    { path: 'estadisticas', component: EstadisticasComponent },

    { path: 'estudiantes', children:[
      { path: '', component: EstudiantesComponent},
      { path: 'aprobarEstudiantes', component: AprobarEstudiantesComponent },
    ] },


    { path: 'profesores', children:[
      { path: '', component: ProfesoresComponent},
      { path: 'agregarProfesor', component: AgregarProfesorComponent}
    ] },

    { path: 'eventos', children:[
        { path: '', component: EventosComponent },
        { path: 'agregarEvento', component: AgregarEventoComponent}
    ]}

  ]},


   {path: 'administrador', component: AdministradorComponent, children: [
     { path: 'universidades', component: UniversidadesComponent },
     { path: 'universidad', component: UniversidadComponent },
     { path: 'sedes', component: SedesComponent },
     { path: 'sede/:id', component: SedeComponent },
     { path: 'carreras', component: CarrerasComponent },
     { path: 'administradores', component: AdministradoresComponent },
     { path: 'editar-administradores', component: EditarAdministradoresComponent},
     { path: 'editar-universidad', component: EditarUniversidadComponent},
     { path: 'administrar-coordinadores', component: AdministrarCoordinadoresComponent },
     { path: 'editar-coordinadores', component: EditarCoordinadoresComponent }
   ]
  }

];
SedeComponent
@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule]
})

export class AppRutasModulo {

}

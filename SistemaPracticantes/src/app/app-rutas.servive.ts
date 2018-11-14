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
import {UniversidadComponent} from './administrador/universidades/universidad/universidad.component';
import {AdministrarCoordinadoresComponent} from './administrador/administrar-coordinadores/administrar-coordinadores.component';
import {SeleccionarEmpresaComponent} from './coordinadores/empresas/seleccionar-empresa/seleccionar-empresa.component';
import {SeleccionarProfesorComponent} from './coordinadores/profesores/seleccionar-profesor/seleccionar-profesor.component';

import {SemestresComponent} from './administrador/semestres/semestres.component';
import {EmpresaComponent} from './empresa/empresa.component';
import {EventosEmpresaComponent} from './empresa/eventos-empresa/eventos-empresa.component';
import {CarrerasEmpresaComponent} from './empresa/carreras-empresa/carreras-empresa.component';
import {DocumentosEmpresaComponent} from './empresa/documentos-empresa/documentos-empresa.component';
import {VerEventoComponent} from './general/ver-evento/ver-evento.component';
import {EnviarSolicitudComponent} from './empresa/carreras-empresa/enviar-solicitud/enviar-solicitud.component';
import {VerEstudianteComponent} from './general/ver-estudiante/ver-estudiante.component';
import {EstudiantePracticaComponent} from './coordinadores/estudiantes/estudiante-practica/estudiante-practica.component';
import {AsignarProfesorPracticaComponent} from './coordinadores/estudiantes/asignar-profesor-practica/asignar-profesor-practica.component';

// Estudiantes
import {ModuloEstudiantesComponent} from './modulo-estudiantes/modulo-estudiantes.component';
import {EventosEstudiantesComponent} from './modulo-estudiantes/eventos-estudiantes/eventos-estudiantes.component';
import {EvaluacionesComponent} from './modulo-estudiantes/evaluaciones/evaluaciones.component';
import {PracticaComponent} from './modulo-estudiantes/evaluaciones/practica/practica.component';
import {ProfesorPracticaComponent} from './modulo-estudiantes/evaluaciones/profesor-practica/profesor-practica.component';
import {AgregarAdministradorComponent} from './administrador/administradores/agregar-administrador/agregar-administrador.component';
import {CrearCoordinadorComponent} from './administrador/administrar-coordinadores/crear-coordinador/crear-coordinador.component';
import {CrearUniversidadComponent} from './administrador/universidades/crear-universidad/crear-universidad.component';
import {CrearSemestreComponent} from './administrador/semestres/crear-semestre/crear-semestre.component';

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
          { path: 'aprobarEmpresa', component: AprobarEmpresasComponent },
          { path: 'empresaSeleccionada', component: SeleccionarEmpresaComponent}
        ] },


      { path: 'estadisticas', component: EstadisticasComponent },

      { path: 'estudiantes', children:[
          { path: '', component: EstudiantesComponent},
          { path: 'aprobarEstudiantes', component: AprobarEstudiantesComponent },
          { path: 'estudiantePractica', component: EstudiantePracticaComponent },
          { path: 'estudianteSeleccionado', component: VerEstudianteComponent },
          { path: 'asignarProfesorPractica', component: AsignarProfesorPracticaComponent}
        ] },


      { path: 'profesores', children:[
          { path: '', component: ProfesoresComponent},
          { path: 'agregarProfesor', component: AgregarProfesorComponent},
          { path: 'profesorSeleccionado',component: SeleccionarProfesorComponent }
        ] },

      { path: 'eventos', children:[
          { path: '', component: EventosComponent },
          { path: 'agregarEvento', component: AgregarEventoComponent},
          {path:'eventoSeleccionado', component: VerEventoComponent}
        ]}
    ]},
  {path: 'modulo-estudiantes', component: ModuloEstudiantesComponent, children: [
      { path: '', redirectTo: 'eventos-estudiantes', pathMatch: 'full' },
      { path: 'eventos-estudiantes', component: EventosEstudiantesComponent },
      { path: 'evaluaciones', component: EvaluacionesComponent, children:[
          { path: 'procesoPractica', component: PracticaComponent },
          { path: 'profesorPractica', component: ProfesorPracticaComponent }
        ]}
    ]},
  {path: 'administrador', component: AdministradorComponent, children: [
      { path: 'universidades', children:[
          { path:'', component: UniversidadesComponent},
          { path: 'crearUniversidad', component: CrearUniversidadComponent }
        ] },
      { path: 'universidad/:id', component: UniversidadComponent },
      { path: 'sedes', component: SedesComponent },
      { path: 'sede/:id/:nombreSede', component: SedeComponent },
      { path: 'carreras', component: CarrerasComponent },
      { path: 'administradores', children:[
          { path: '', component: AdministradoresComponent },
          { path: 'crearAdministrador', component: AgregarAdministradorComponent }
        ] },
      { path: 'coordinadores', children:[
          { path: '', component: AdministrarCoordinadoresComponent },
          { path: 'crearCoordinador', component: CrearCoordinadorComponent }
        ] },
      { path: 'semestres', children:[
          { path: '', component: SemestresComponent },
          { path: 'crearSemestre', component: CrearSemestreComponent }
        ] }
    ]
  },
  {path: 'empresa', component: EmpresaComponent, children:[
      { path: '', redirectTo: 'eventosEmpresa', pathMatch: 'full'},
      { path: 'eventosEmpresa' , children: [
          {path: '' , component: EventosEmpresaComponent},
          {path: 'eventoSeleccionado', component: VerEventoComponent}
        ]},
      { path: 'carrerasEmpresa', children:[
          { path: '', component: CarrerasEmpresaComponent },
          { path: 'enviarSolicitud', component: EnviarSolicitudComponent}
        ]},
      { path: 'documentosEmpresa', component: DocumentosEmpresaComponent}
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

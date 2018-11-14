import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CoordinadoresComponent } from './coordinadores/coordinadores.component';
import { EstadisticasComponent } from './coordinadores/estadisticas/estadisticas.component';
import { EstudiantesComponent } from './coordinadores/estudiantes/estudiantes.component';
import { ProfesoresComponent } from './coordinadores/profesores/profesores.component';
import { EventosComponent } from './coordinadores/eventos/eventos.component';
import { EmpresasComponent } from './coordinadores/empresas/empresas.component';
import { DocumentosComponent } from './coordinadores/documentos/documentos.component';
import { AgregarProfesorComponent } from './coordinadores/profesores/agregar-profesor/agregar-profesor.component';
import { AprobarEmpresasComponent } from './coordinadores/empresas/aprobar-empresas/aprobar-empresas.component';
import { AgregarDocumentoComponent } from './coordinadores/documentos/agregar-documento/agregar-documento.component';
import { AprobarEstudiantesComponent } from './coordinadores/estudiantes/aprobar-estudiantes/aprobar-estudiantes.component';
import { AppRutasModulo } from './app-rutas.servive';
import { LoginComponent } from './login/login.component';
import { InformacionPersonalComponent } from './general/informacion-personal/informacion-personal.component';
import { CrearPersonaComponent } from './general/crear-persona/crear-persona.component';
import { CrearUsuarioComponent } from './general/crear-usuario/crear-usuario.component';
import { CrearEstudianteComponent } from './general/crear-estudiante/crear-estudiante.component';

import { RegistroEmpresaComponent } from './login/registro-empresa/registro-empresa.component';
import { RegistroEstudianteComponent } from './login/registro-estudiante/registro-estudiante.component';
import { AgregarEventoComponent} from './coordinadores/eventos/agregar-evento/agregar-evento.component';

import { UniversidadesComponent } from './administrador/universidades/universidades.component';
import { SedesComponent } from './administrador/sedes/sedes.component';
import { CarrerasComponent } from './administrador/carreras/carreras.component';
import { AdministradorComponent } from './administrador/administrador.component';

import { AdministradoresComponent } from './administrador/administradores/administradores.component';
import { UniversidadComponent } from './administrador/universidades/universidad/universidad.component';
import { SedeComponent } from './administrador/sedes/sede/sede.component';
import { AdministrarCoordinadoresComponent } from './administrador/administrar-coordinadores/administrar-coordinadores.component';
import { SemestresComponent } from './administrador/semestres/semestres.component';
import { EmpresasAprobadasComponent } from './coordinadores/empresas/empresas-aprobadas/empresas-aprobadas.component';
import { SeleccionarEmpresaComponent } from './coordinadores/empresas/seleccionar-empresa/seleccionar-empresa.component';
import { SeleccionarProfesorComponent } from './coordinadores/profesores/seleccionar-profesor/seleccionar-profesor.component';
import { ModuloEstudiantesComponent } from './modulo-estudiantes/modulo-estudiantes.component';
import { EventosEstudiantesComponent } from './modulo-estudiantes/eventos-estudiantes/eventos-estudiantes.component';
import { CrearEmpresaComponent } from './general/crear-empresa/crear-empresa.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { EventosEmpresaComponent } from './empresa/eventos-empresa/eventos-empresa.component';
import { CarrerasEmpresaComponent } from './empresa/carreras-empresa/carreras-empresa.component';
import { DocumentosEmpresaComponent } from './empresa/documentos-empresa/documentos-empresa.component';
import { VerEventoComponent } from './general/ver-evento/ver-evento.component';
import { EnviarSolicitudComponent } from './empresa/carreras-empresa/enviar-solicitud/enviar-solicitud.component';
import { VerEstudianteComponent } from './general/ver-estudiante/ver-estudiante.component';
import { EstudiantePracticaComponent } from './coordinadores/estudiantes/estudiante-practica/estudiante-practica.component';
import { AsignarProfesorPracticaComponent } from './coordinadores/estudiantes/asignar-profesor-practica/asignar-profesor-practica.component';
import { EvaluacionesComponent } from './modulo-estudiantes/evaluaciones/evaluaciones.component';
import { ProfesorPracticaComponent } from './modulo-estudiantes/evaluaciones/profesor-practica/profesor-practica.component';
import { PracticaComponent } from './modulo-estudiantes/evaluaciones/practica/practica.component';
import { AgregarAdministradorComponent } from './administrador/administradores/agregar-administrador/agregar-administrador.component';
import { CrearCoordinadorComponent } from './administrador/administrar-coordinadores/crear-coordinador/crear-coordinador.component';
import { CrearUniversidadComponent } from './administrador/universidades/crear-universidad/crear-universidad.component';
import { CrearSemestreComponent } from './administrador/semestres/crear-semestre/crear-semestre.component';

@NgModule({
  declarations: [
    AppComponent,
    CoordinadoresComponent,
    EstadisticasComponent,
    EstudiantesComponent,
    ProfesoresComponent,
    EventosComponent,
    EmpresasComponent,
    DocumentosComponent,
    AgregarProfesorComponent,
    AprobarEmpresasComponent,
    AgregarDocumentoComponent,
    AprobarEstudiantesComponent,
    LoginComponent,
    InformacionPersonalComponent,
    CrearPersonaComponent,
    CrearUsuarioComponent,
    CrearEstudianteComponent,
    RegistroEmpresaComponent,
    RegistroEstudianteComponent,
    CrearEmpresaComponent,
    AgregarEventoComponent,
    AdministradorComponent,
    UniversidadesComponent,
    CarrerasComponent,
    SedesComponent,
    AdministradorComponent,

    AdministradoresComponent,
    UniversidadComponent,
    SedeComponent,
    AdministrarCoordinadoresComponent,
    EmpresasAprobadasComponent,
    SeleccionarEmpresaComponent,
    SeleccionarProfesorComponent,
    SemestresComponent,
    EmpresasAprobadasComponent,
    ModuloEstudiantesComponent,
    EventosEstudiantesComponent,
    EmpresaComponent,
    EventosEmpresaComponent,
    CarrerasEmpresaComponent,
    DocumentosEmpresaComponent,
    VerEventoComponent,
    EnviarSolicitudComponent,
    VerEstudianteComponent,
    EstudiantePracticaComponent,
    AsignarProfesorPracticaComponent,
    EvaluacionesComponent,
    ProfesorPracticaComponent,
    PracticaComponent,
    AgregarAdministradorComponent,
    CrearCoordinadorComponent,
    CrearUniversidadComponent,
    CrearSemestreComponent
  ],
  imports: [
    BrowserModule,
    AppRutasModulo,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}


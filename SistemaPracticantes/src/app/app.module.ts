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
import { CrearEmpresaComponent } from './general/crear-empresa/crear-empresa.component';
import { AgregarEventoComponent} from './coordinadores/eventos/agregar-evento/agregar-evento.component';

import { UniversidadesComponent } from './administrador/universidades/universidades.component';
import { SedesComponent } from './administrador/sedes/sedes.component';
import { CarrerasComponent } from './administrador/carreras/carreras.component';
import { AdministradorComponent } from './administrador/administrador.component';

import { AdministradoresComponent } from './administrador/administradores/administradores.component';
import { EditarAdministradoresComponent } from './administrador/administradores/editar-administradores/editar-administradores.component';
import { EditarUniversidadComponent } from './administrador/editar-universidad/editar-universidad.component';
import { UniversidadComponent } from './administrador/universidades/universidad/universidad.component';
import { SedeComponent } from './administrador/sedes/sede/sede.component';
import { AdministrarCoordinadoresComponent } from './administrador/administrar-coordinadores/administrar-coordinadores.component';
import { EditarCoordinadoresComponent } from './administrador/editar-coordinadores/editar-coordinadores.component';
import { SemestresComponent } from './administrador/semestres/semestres.component';


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
    EditarAdministradoresComponent,
    EditarUniversidadComponent,
    UniversidadComponent,
    SedeComponent,
    AdministrarCoordinadoresComponent,
    EditarCoordinadoresComponent,
    SemestresComponent,
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


import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarSolicitudComponent } from './enviar-solicitud.component';

describe('EnviarSolicitudComponent', () => {
  let component: EnviarSolicitudComponent;
  let fixture: ComponentFixture<EnviarSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

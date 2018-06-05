import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarProfesorComponent } from './seleccionar-profesor.component';

describe('SeleccionarProfesorComponent', () => {
  let component: SeleccionarProfesorComponent;
  let fixture: ComponentFixture<SeleccionarProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

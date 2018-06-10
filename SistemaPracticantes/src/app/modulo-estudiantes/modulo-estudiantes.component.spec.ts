import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloEstudiantesComponent } from './modulo-estudiantes.component';

describe('ModuloEstudiantesComponent', () => {
  let component: ModuloEstudiantesComponent;
  let fixture: ComponentFixture<ModuloEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarEstudiantesComponent } from './aprobar-estudiantes.component';

describe('AprobarEstudiantesComponent', () => {
  let component: AprobarEstudiantesComponent;
  let fixture: ComponentFixture<AprobarEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobarEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarProfesorPracticaComponent } from './asignar-profesor-practica.component';

describe('AsignarProfesorPracticaComponent', () => {
  let component: AsignarProfesorPracticaComponent;
  let fixture: ComponentFixture<AsignarProfesorPracticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarProfesorPracticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarProfesorPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

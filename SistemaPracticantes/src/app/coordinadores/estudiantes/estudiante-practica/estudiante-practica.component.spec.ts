import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantePracticaComponent } from './estudiante-practica.component';

describe('EstudiantePracticaComponent', () => {
  let component: EstudiantePracticaComponent;
  let fixture: ComponentFixture<EstudiantePracticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantePracticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantePracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

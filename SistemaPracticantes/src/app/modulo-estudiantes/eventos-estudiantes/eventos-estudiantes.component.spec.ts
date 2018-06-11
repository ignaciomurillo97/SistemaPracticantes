import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosEstudiantesComponent } from './eventos-estudiantes.component';

describe('EventosEstudiantesComponent', () => {
  let component: EventosEstudiantesComponent;
  let fixture: ComponentFixture<EventosEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorPracticaComponent } from './profesor-practica.component';

describe('ProfesorPracticaComponent', () => {
  let component: ProfesorPracticaComponent;
  let fixture: ComponentFixture<ProfesorPracticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorPracticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

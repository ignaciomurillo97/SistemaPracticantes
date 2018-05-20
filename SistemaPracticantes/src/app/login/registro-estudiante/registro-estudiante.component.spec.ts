import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEstudianteComponent } from './registro-estudiante.component';

describe('RegistroEstudianteComponent', () => {
  let component: RegistroEstudianteComponent;
  let fixture: ComponentFixture<RegistroEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

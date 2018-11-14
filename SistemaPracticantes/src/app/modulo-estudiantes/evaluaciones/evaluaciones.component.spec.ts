import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionesComponent } from './evaluaciones.component';

describe('EvaluacionesComponent', () => {
  let component: EvaluacionesComponent;
  let fixture: ComponentFixture<EvaluacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

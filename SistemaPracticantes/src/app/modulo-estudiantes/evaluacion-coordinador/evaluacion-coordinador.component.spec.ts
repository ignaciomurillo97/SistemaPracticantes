import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionCoordinadorComponent } from './evaluacion-coordinador.component';

describe('EvaluacionCoordinadorComponent', () => {
  let component: EvaluacionCoordinadorComponent;
  let fixture: ComponentFixture<EvaluacionCoordinadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionCoordinadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

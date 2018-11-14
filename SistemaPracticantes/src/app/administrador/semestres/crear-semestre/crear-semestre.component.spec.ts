import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSemestreComponent } from './crear-semestre.component';

describe('CrearSemestreComponent', () => {
  let component: CrearSemestreComponent;
  let fixture: ComponentFixture<CrearSemestreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSemestreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSemestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

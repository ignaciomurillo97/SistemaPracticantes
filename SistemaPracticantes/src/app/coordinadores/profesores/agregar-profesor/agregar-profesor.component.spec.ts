import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProfesorComponent } from './agregar-profesor.component';

describe('AgregarProfesorComponent', () => {
  let component: AgregarProfesorComponent;
  let fixture: ComponentFixture<AgregarProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

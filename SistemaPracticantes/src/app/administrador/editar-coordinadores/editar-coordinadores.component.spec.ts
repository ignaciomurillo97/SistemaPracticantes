import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCoordinadoresComponent } from './editar-coordinadores.component';

describe('EditarCoordinadoresComponent', () => {
  let component: EditarCoordinadoresComponent;
  let fixture: ComponentFixture<EditarCoordinadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCoordinadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCoordinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAdministradoresComponent } from './editar-administradores.component';

describe('EditarAdministradoresComponent', () => {
  let component: EditarAdministradoresComponent;
  let fixture: ComponentFixture<EditarAdministradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAdministradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

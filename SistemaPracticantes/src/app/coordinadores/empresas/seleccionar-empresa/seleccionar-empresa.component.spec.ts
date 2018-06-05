import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarEmpresaComponent } from './seleccionar-empresa.component';

describe('SeleccionarEmpresaComponent', () => {
  let component: SeleccionarEmpresaComponent;
  let fixture: ComponentFixture<SeleccionarEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

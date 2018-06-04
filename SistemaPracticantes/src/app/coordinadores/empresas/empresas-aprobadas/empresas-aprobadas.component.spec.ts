import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasAprobadasComponent } from './empresas-aprobadas.component';

describe('EmpresasAprobadasComponent', () => {
  let component: EmpresasAprobadasComponent;
  let fixture: ComponentFixture<EmpresasAprobadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasAprobadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasAprobadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

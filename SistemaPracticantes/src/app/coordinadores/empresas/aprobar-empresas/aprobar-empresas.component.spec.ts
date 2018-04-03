import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobarEmpresasComponent } from './aprobar-empresas.component';

describe('AprobarEmpresasComponent', () => {
  let component: AprobarEmpresasComponent;
  let fixture: ComponentFixture<AprobarEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobarEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

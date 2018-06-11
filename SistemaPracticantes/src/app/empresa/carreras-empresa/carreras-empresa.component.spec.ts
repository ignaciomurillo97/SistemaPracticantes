import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerasEmpresaComponent } from './carreras-empresa.component';

describe('CarrerasEmpresaComponent', () => {
  let component: CarrerasEmpresaComponent;
  let fixture: ComponentFixture<CarrerasEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrerasEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerasEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

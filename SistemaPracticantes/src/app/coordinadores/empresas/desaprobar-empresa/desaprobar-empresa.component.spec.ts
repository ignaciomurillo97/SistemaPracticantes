import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesaprobarEmpresaComponent } from './desaprobar-empresa.component';

describe('DesaprobarEmpresaComponent', () => {
  let component: DesaprobarEmpresaComponent;
  let fixture: ComponentFixture<DesaprobarEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesaprobarEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesaprobarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

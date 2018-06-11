import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosEmpresaComponent } from './documentos-empresa.component';

describe('DocumentosEmpresaComponent', () => {
  let component: DocumentosEmpresaComponent;
  let fixture: ComponentFixture<DocumentosEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentosEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

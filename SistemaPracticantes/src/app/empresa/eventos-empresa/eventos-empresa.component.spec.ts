import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosEmpresaComponent } from './eventos-empresa.component';

describe('EventosEmpresaComponent', () => {
  let component: EventosEmpresaComponent;
  let fixture: ComponentFixture<EventosEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

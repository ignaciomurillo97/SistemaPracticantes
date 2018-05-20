import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarCoordinadoresComponent } from './administrar-coordinadores.component';

describe('AdministrarCoordinadoresComponent', () => {
  let component: AdministrarCoordinadoresComponent;
  let fixture: ComponentFixture<AdministrarCoordinadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarCoordinadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarCoordinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadoresComponent } from './coordinadores.component';

describe('CoordinadoresComponent', () => {
  let component: CoordinadoresComponent;
  let fixture: ComponentFixture<CoordinadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

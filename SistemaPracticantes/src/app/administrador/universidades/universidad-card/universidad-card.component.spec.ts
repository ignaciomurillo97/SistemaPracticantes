import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadCardComponent } from './universidad-card.component';

describe('UniversidadCardComponent', () => {
  let component: UniversidadCardComponent;
  let fixture: ComponentFixture<UniversidadCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversidadCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

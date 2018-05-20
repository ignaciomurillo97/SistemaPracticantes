import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadComponent } from './universidad.component';

describe('UniversidadComponent', () => {
  let component: UniversidadComponent;
  let fixture: ComponentFixture<UniversidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

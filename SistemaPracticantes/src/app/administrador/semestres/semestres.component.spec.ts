import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemestresComponent } from './semestres.component';

describe('SemestresComponent', () => {
  let component: SemestresComponent;
  let fixture: ComponentFixture<SemestresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemestresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

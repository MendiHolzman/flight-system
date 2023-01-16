import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leg4Component } from './leg4.component';

describe('Leg4Component', () => {
  let component: Leg4Component;
  let fixture: ComponentFixture<Leg4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Leg4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leg4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

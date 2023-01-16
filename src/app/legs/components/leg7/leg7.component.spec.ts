import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leg7Component } from './leg7.component';

describe('Leg7Component', () => {
  let component: Leg7Component;
  let fixture: ComponentFixture<Leg7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Leg7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leg7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

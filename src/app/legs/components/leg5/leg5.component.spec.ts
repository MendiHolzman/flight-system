import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leg5Component } from './leg5.component';

describe('Leg5Component', () => {
  let component: Leg5Component;
  let fixture: ComponentFixture<Leg5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Leg5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leg5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

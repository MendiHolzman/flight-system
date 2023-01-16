import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leg8Component } from './leg8.component';

describe('Leg8Component', () => {
  let component: Leg8Component;
  let fixture: ComponentFixture<Leg8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Leg8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Leg8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

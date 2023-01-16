import { TestBed } from '@angular/core/testing';
import { FlightComponent } from './flight.component';
describe('FlightComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FlightComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(FlightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=flight.component.spec.js.map
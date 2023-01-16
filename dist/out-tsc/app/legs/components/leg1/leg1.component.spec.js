import { TestBed } from '@angular/core/testing';
import { Leg1Component } from './leg1.component';
describe('Leg1Component', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Leg1Component]
        })
            .compileComponents();
        fixture = TestBed.createComponent(Leg1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=leg1.component.spec.js.map
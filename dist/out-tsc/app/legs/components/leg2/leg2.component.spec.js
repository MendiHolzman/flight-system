import { TestBed } from '@angular/core/testing';
import { Leg2Component } from './leg2.component';
describe('Leg2Component', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Leg2Component]
        })
            .compileComponents();
        fixture = TestBed.createComponent(Leg2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=leg2.component.spec.js.map
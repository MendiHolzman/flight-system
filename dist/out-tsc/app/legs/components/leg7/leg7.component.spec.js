import { TestBed } from '@angular/core/testing';
import { Leg7Component } from './leg7.component';
describe('Leg7Component', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Leg7Component]
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
//# sourceMappingURL=leg7.component.spec.js.map
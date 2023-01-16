import { TestBed } from '@angular/core/testing';
import { Leg3Component } from './leg3.component';
describe('Leg3Component', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Leg3Component]
        })
            .compileComponents();
        fixture = TestBed.createComponent(Leg3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=leg3.component.spec.js.map
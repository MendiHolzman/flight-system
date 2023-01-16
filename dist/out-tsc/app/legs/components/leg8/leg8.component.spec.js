import { TestBed } from '@angular/core/testing';
import { Leg8Component } from './leg8.component';
describe('Leg8Component', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Leg8Component]
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
//# sourceMappingURL=leg8.component.spec.js.map
import { TestBed } from '@angular/core/testing';
import { Leg6Component } from './leg6.component';
describe('Leg6Component', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [Leg6Component]
        })
            .compileComponents();
        fixture = TestBed.createComponent(Leg6Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=leg6.component.spec.js.map
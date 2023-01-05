import { TestBed } from '@angular/core/testing';
import { HangerComponent } from './hanger.component';
describe('HangerComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HangerComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(HangerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=hanger.component.spec.js.map
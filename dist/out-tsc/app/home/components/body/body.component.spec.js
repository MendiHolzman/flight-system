import { TestBed } from '@angular/core/testing';
import { BodyComponent } from './body.component';
describe('BodyComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BodyComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(BodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=body.component.spec.js.map
import { TestBed } from '@angular/core/testing';
import { AudioComponent } from './audio.component';
describe('AudioComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AudioComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(AudioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=audio.component.spec.js.map
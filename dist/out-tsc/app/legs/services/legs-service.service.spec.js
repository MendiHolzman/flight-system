import { TestBed } from '@angular/core/testing';
import { LegsServiceService } from './legs-service.service';
describe('LegsServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LegsServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=legs-service.service.spec.js.map
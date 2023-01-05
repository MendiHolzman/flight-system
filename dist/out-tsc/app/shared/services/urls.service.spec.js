import { TestBed } from '@angular/core/testing';
import { UrlsService } from './urls.service';
describe('UrlsService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UrlsService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=urls.service.spec.js.map
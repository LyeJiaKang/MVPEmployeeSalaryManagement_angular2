import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserUploadService } from './user-upload.service';

describe('UserUploadService', () => {
  let service: UserUploadService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

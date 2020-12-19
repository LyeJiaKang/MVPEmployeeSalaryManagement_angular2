import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserViewService } from './user-view.service';
import { CommonModule } from '@angular/common';

describe('UserViewService', () => {
  let service: UserViewService;
  let httpMock: HttpTestingController;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,CommonModule]
    });
    service = TestBed.inject(UserViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getJson should return value from a Json',
    (done: DoneFn) => {
    service.filterUser(0,10000,"+","name",0,30).subscribe(json => {
      expect(typeof json).toBe('object');
      done();
    });
  });
});

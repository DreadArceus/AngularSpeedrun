import { TestBed } from '@angular/core/testing';

import { TodoFetchService } from './todo-fetch.service';

describe('TodoFetchService', () => {
  let service: TodoFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

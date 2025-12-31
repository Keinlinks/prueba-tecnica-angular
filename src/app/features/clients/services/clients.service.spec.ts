import { TestBed } from "@angular/core/testing";
import { ClientsService } from "./clients.service";
import { LoggerService } from "@src/app/core/services/logger.service";
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from "@src/environments/environment";

describe('ClientsService', () => {
  let clientService: ClientsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientsService, { provide: LoggerService, useValue: spy }],
    });

    clientService = TestBed.inject(ClientsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should make a  GET request to /clients/linq with correct params', () => {
    const page = 1;
    const pageSize = 10;

    clientService.getClients(page, pageSize).subscribe(response => {
      expect(response.data).toBeDefined();
      expect(response.page).toBe(1);
      expect(response.pageSize).toBe(10);
      expect(response.totalRecords).toBeDefined()
    });

        const req = httpMock.expectOne(
          `${environment.apiUrl}/clients/linq?page=${page}&pageSize=${pageSize}`
        );
        expect(req.request.method).toBe('GET');
  })

  afterEach(() => {
    httpMock.verify();
  })
})

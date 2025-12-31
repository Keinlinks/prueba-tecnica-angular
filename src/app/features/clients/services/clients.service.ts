import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LoggerService } from "@src/app/core/services/logger.service";
import { Client } from "../models/client.model";
import { Observable } from "rxjs";
import { environment } from "@src/environments/environment";


@Injectable()
export class ClientsService {
  private readonly logger = inject(LoggerService);
  private readonly http = inject(HttpClient);

  private readonly apiUrl = environment.apiUrl;

  public getClients(page: number, pageSize: number): Observable<Client[]> {
    this.logger.log(`getClients(page: ${page}, pageSize: ${pageSize})`);
    return this.http.get<Client[]>(
      `${this.apiUrl}/clients-linq?page=${page}&pageSize=${pageSize}`,
    );
  }
}

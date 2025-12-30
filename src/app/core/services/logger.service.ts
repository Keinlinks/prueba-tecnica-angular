import { Injectable } from "@angular/core";
import { environment } from "@src/environments/environment";

@Injectable({providedIn: 'root'})
export class LoggerService {
  constructor() {}

  log(message: string): void {
    if (environment.production) return;

    console.log(`${new Date().toISOString()}: ${message}`);
  }
  error(message: string): void {
    if (environment.production) return;

    console.error(`${new Date().toISOString()}: ${message}`);
  }
}

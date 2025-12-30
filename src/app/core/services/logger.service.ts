import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoggerService {
  constructor() {}

  log(message: string): void {
    console.log(`${new Date().toISOString()}: ${message}`);
  }
  error(message: string): void {
    console.error(`${new Date().toISOString()}: ${message}`);
  }
}

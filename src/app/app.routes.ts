import { Routes } from '@angular/router';
import { ClientsService } from './features/clients/services/clients.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent:()=>import("./features/clients/pages/client-list/client-list.component").then(c=>c.ClientListComponent),
    providers: [ClientsService]
  }
];

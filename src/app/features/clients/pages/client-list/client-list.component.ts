import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ClientTableComponent } from '../../components/clients-table/client-table.component';
import { Client } from '../../models/client.model';

@Component({
  selector: 'prueba-tecnica-client-list',
  standalone: true,
  imports: [
    CommonModule,
    ClientTableComponent
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientListComponent {
  private readonly clientService = inject(ClientsService);

  clients:Client[] = [];

  async getClients(page: number, pageSize: number) {
    this.clientService.getClients(page, pageSize).subscribe({
      next: (clients:Client[])=>{
        this.clients = clients;
      }
    });
  }
}

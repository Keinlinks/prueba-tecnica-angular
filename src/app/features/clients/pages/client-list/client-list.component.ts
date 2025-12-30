import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'prueba-tecnica-client-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientListComponent {
  private readonly clientService = inject(ClientsService);

  async getClients(page: number, pageSize: number) {
    await this.clientService.getClients(page, pageSize);
  }
}

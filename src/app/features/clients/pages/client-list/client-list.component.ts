import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { ClientTableComponent } from '../../components/clients-table/client-table.component';
import { Client } from '../../models/client.model';
import { PaginationResponse } from '@src/app/core/api/paginationResponse';

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
export class ClientListComponent implements OnInit {
  private readonly clientService = inject(ClientsService);
  private readonly cd = inject(ChangeDetectorRef)

  clientTableData!:PaginationResponse<Client[]>;

  ngOnInit(): void {
    this.getClients(1,5);
  }

  async getClients(page: number, pageSize: number) {
    this.clientService.getClients(page, pageSize).subscribe({
      next: (clientTableData: PaginationResponse<Client[]>) => {
        this.clientTableData = clientTableData;
        this.cd.detectChanges()
      },
    });
  }
}

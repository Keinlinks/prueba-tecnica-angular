import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PaginationResponse } from '@src/app/core/api/paginationResponse';
import { Client } from '@src/app/features/clients/models/client.model';
import { PhonePipe } from '@src/app/shared/pipes/phone.pipe';

@Component({
  selector: 'prueba-tecnica-client-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, PhonePipe, MatPaginatorModule],
  templateUrl: './client-table.component.html',
  styleUrl: './client-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientTableComponent {
  @Output() changePage: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  //Material components params
  @Input() dataSource!: PaginationResponse<Client[]>;
  displayedColumns: string[] = ['name', 'country', 'phone'];
  pageSizeOptions = [5,10,15,20];

  _changePage(event: PageEvent) {
    this.changePage.emit(event);
  }
}

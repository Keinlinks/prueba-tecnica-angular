import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Client } from '@src/app/features/clients/models/client.model';
import { PhonePipe } from '@src/app/shared/pipes/phone.pipe';

@Component({
  selector: 'prueba-tecnica-client-table',
  standalone: true,
  imports: [CommonModule, MatTableModule,PhonePipe],
  templateUrl: './client-table.component.html',
  styleUrl: './client-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientTableComponent {
  @Input() dataSource: Client[] = [];
  displayedColumns: string[] = ['name', 'country', 'phone'];

}

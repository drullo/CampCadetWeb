import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DataWaiterComponent } from '../data-waiter/data-waiter.component';

@Component({
  selector: 'cc-qr-code',
  imports: [DataWaiterComponent],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.scss'
})
export class QrCodeComponent {
  dataService = inject(DataService);
}

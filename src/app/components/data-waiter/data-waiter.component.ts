import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
    selector: 'cc-data-waiter',
    templateUrl: './data-waiter.component.html',
    styleUrls: ['./data-waiter.component.css'],
    imports: [MatProgressBar]
})
export class DataWaiterComponent {  dataService = inject(DataService);

}

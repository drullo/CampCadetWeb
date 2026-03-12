import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MenuComponent } from '../menu/menu.component';
import { DataWaiterComponent } from '../data-waiter/data-waiter.component';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { BlurbPipe } from '../../pipes/blurb.pipe';

@Component({
    selector: 'cc-call-of-honor',
    templateUrl: './call-of-honor.component.html',
    styleUrls: ['./call-of-honor.component.css'],
    imports: [
      MenuComponent,
      DataWaiterComponent, RouterLink, MatButton, MatIcon, BlurbPipe
    ]
})
export class CallOfHonorComponent {
  dataService = inject(DataService);

  title = 'Call of Honor';
  blurbName = 'Call of Honor Introduction';
  blurbNameCoh = 'Call of Honor';
}
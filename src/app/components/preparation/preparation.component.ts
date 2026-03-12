import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MenuComponent } from '../menu/menu.component';
import { DataWaiterComponent } from '../data-waiter/data-waiter.component';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { BlurbPipe } from '../../pipes/blurb.pipe';

@Component({
    selector: 'cc-preparation',
    templateUrl: './preparation.component.html',
    styleUrls: ['./preparation.component.css'],
    imports: [
      MenuComponent,
      DataWaiterComponent, RouterLink, MatButton, MatIcon, BlurbPipe]
})
export class PreparationComponent {
  dataService = inject(DataService);

  title = 'Preparing for Camp Cadet';
  blurbName = 'Camp Preparation';
}
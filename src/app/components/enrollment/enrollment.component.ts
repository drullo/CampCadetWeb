import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MenuComponent } from '../menu/menu.component';
import { DataWaiterComponent } from '../data-waiter/data-waiter.component';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { BlurbPipe } from '../../pipes/blurb.pipe';

@Component({
    selector: 'cc-enrollment',
    templateUrl: './enrollment.component.html',
    styleUrls: ['./enrollment.component.css'],
    imports: [
      MenuComponent,
      DataWaiterComponent, RouterLink, MatButton, MatIcon, BlurbPipe
    ]
})
export class EnrollmentComponent {
  dataService = inject(DataService);

  title = 'Camp Enrollment';
  blurbName = 'Sign Up';
}
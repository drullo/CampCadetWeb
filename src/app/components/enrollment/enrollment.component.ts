import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cc-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent {
  title = 'Camp Enrollment';
  blurbName = 'Sign Up';

  constructor(public dataService: DataService) {}
}
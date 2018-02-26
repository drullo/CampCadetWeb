import { Component } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'cc-call-of-honor',
  templateUrl: './call-of-honor.component.html',
  styleUrls: ['./call-of-honor.component.css']
})
export class CallOfHonorComponent {
  title = 'Call of Honor';

  constructor(public dataService: DataService) { }
}

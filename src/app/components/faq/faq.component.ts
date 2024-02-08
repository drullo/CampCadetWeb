import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cc-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {
  constructor(public dataService: DataService) { }
}

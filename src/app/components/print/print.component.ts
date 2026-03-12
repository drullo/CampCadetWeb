import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { timer } from 'rxjs';
import { BlurbPipe } from '../../pipes/blurb.pipe';
import { FaqForCategoryPipe } from '../../pipes/faq-for-category.pipe';
import { DataService } from '../../services/data.service';
import { DataWaiterComponent } from '../data-waiter/data-waiter.component';

@Component({
    selector: 'cc-print',
    templateUrl: './print.component.html',
    styleUrls: ['./print.component.css'],
    imports: [DataWaiterComponent, BlurbPipe, FaqForCategoryPipe]
})
export class PrintComponent implements OnInit {
  private route = inject(ActivatedRoute);
  dataService = inject(DataService);

  topic?: string | null;

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.topic = params.get('topic');

        timer(3000).subscribe(() => {
          if (this.topic) {
            window.print();
          }
        });
      });
  }
}
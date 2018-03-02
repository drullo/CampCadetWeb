import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '@campcadet/services/data.service';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'cc-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  topic: string;

  constructor(private route: ActivatedRoute, public dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.topic = params.get('topic');

        Observable.timer(3000).subscribe(() => {
          if (this.topic) {
            window.print();
          }
        });
      });
  }

}

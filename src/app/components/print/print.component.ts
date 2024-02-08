//#region Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../../services/data.service';
import { timer } from 'rxjs';
//#endregion
@Component({
  selector: 'cc-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  topic: string | null | undefined;

  constructor(private route: ActivatedRoute, public dataService: DataService) { }

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
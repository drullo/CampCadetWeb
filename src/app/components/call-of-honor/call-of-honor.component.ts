import { Component, OnInit } from '@angular/core';
import { BlurbsService } from '../../services/blurbs.service';

@Component({
  selector: 'cc-call-of-honor',
  templateUrl: './call-of-honor.component.html',
  styleUrls: ['./call-of-honor.component.css']
})
export class CallOfHonorComponent implements OnInit {
  title = 'Call of Honor';
  blurbName = 'Call of Honor Introduction';
  blurb: string;

  blurb2Name = 'Call of Honor';
  blurb2: string;

  constructor(private blurbService: BlurbsService) { }

  ngOnInit() {
    this.blurbService.getBlurbByName(this.blurbName)
      .subscribe(data => this.blurb = data.blurb);

    this.blurbService.getBlurbByName(this.blurb2Name)
      .subscribe(data => this.blurb2 = data.blurb);
  }
}

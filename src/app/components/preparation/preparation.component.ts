import { Component, OnInit } from '@angular/core';
import { BlurbsService } from '../../services/blurbs.service';

@Component({
  selector: 'cc-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.css']
})
export class PreparationComponent implements OnInit {
  title = 'Preparing for Camp Cadet';
  blurbName = 'Camp Preparation';
  blurb: string;

  constructor(private blurbService: BlurbsService) { }

  ngOnInit() {
    this.blurbService.getBlurbByName(this.blurbName)
      .subscribe(data => this.blurb = data.blurb);
  }
}

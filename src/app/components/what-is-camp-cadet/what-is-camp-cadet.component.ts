import { Component, OnInit } from '@angular/core';
import { BlurbsService } from '../../services/blurbs.service';

@Component({
  selector: 'cc-what-is-camp-cadet',
  templateUrl: './what-is-camp-cadet.component.html',
  styleUrls: ['./what-is-camp-cadet.component.css']
})
export class WhatIsCampCadetComponent implements OnInit {
  title = 'What is Camp Cadet?';
  blurbName = 'What is Camp Cadet';
  blurb: string;

  constructor(private blurbService: BlurbsService) { }

  ngOnInit() {
    this.blurbService.getBlurbByName(this.blurbName)
      .subscribe(data => this.blurb = data.blurb);
  }
}

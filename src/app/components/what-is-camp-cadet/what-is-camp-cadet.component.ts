import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'cc-what-is-camp-cadet',
  templateUrl: './what-is-camp-cadet.component.html',
  styleUrls: ['./what-is-camp-cadet.component.css']
})
export class WhatIsCampCadetComponent {
  title = 'What is Camp Cadet';
  blurbName = this.title;

  constructor(public dataService: DataService) {}
}
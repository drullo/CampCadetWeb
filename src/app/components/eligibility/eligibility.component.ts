import { Component, OnInit } from '@angular/core';
import { Requirement } from '../../model/requirement';
import { RequirementsService } from '../../services/requirements.service';
import { BlurbsService } from '../../services/blurbs.service';

@Component({
  selector: 'cc-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {
  title = 'Eligibility Requirements';
  blurbName = 'Eligibility';
  blurb: string;

  items: Requirement[];

  constructor(private blurbService: BlurbsService,
    private requirementService: RequirementsService) { }

  ngOnInit() {
    this.blurbService.getBlurbByName(this.blurbName)
      .subscribe(data => this.blurb = data.blurb);

    this.requirementService.getRequirements()
      .subscribe(data => this.items = data);
  }
}

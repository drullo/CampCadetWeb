import { Component, OnInit } from '@angular/core';
import { BlurbsService } from '../../services/blurbs.service';
import { Rule } from '../../model/rule';
import { RulesService } from '../../services/rules.service';

@Component({
  selector: 'cc-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  title = 'Camp Rules';
  blurbName = 'Camp Rules Introduction';
  blurb: string;

  items: Rule[];

  constructor(private blurbService: BlurbsService,
    private ruleService: RulesService) { }

  ngOnInit() {
    this.blurbService.getBlurbByName(this.blurbName)
      .subscribe(data => this.blurb = data.blurb);

    this.ruleService.getRules()
      .subscribe(data => this.items = data);
  }
}

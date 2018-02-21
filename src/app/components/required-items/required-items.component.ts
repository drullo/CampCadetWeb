import { Component, OnInit } from '@angular/core';
import { RequiredItem } from '../../model/required-item';
import { RequiredItemsService } from '../../services/required-items.service';
import { BlurbsService } from '../../services/blurbs.service';

@Component({
  selector: 'cc-required-items',
  templateUrl: './required-items.component.html',
  styleUrls: ['./required-items.component.css']
})
export class RequiredItemsComponent implements OnInit {
  title = 'Required Items';
  blurbName = 'Camp Supplies Introduction';
  blurb: string;

  items: RequiredItem[];

  constructor(private blurbService: BlurbsService,
    private itemService: RequiredItemsService) { }

  ngOnInit() {
    this.blurbService.getBlurbByName(this.blurbName)
      .subscribe(data => this.blurb = data.blurb);

    this.itemService.getItems()
      .subscribe(data => this.items = data);
  }
}

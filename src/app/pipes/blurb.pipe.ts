import { DataService } from './../services/data.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blurb', pure: false
})
export class BlurbPipe implements PipeTransform {

  constructor(private dataService: DataService) { }

  transform(blurbName: string): string {
    if (!this.dataService.blurbs || !blurbName) { return; }

    const blurb = this.dataService.blurbs
      .filter(b => b.name.toLowerCase() === blurbName.toLowerCase())[0];

    return blurb ? blurb.blurb : null;
  }

}

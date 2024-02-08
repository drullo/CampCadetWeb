import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from '../services/data.service';

@Pipe({
  name: 'blurb'
})
export class BlurbPipe implements PipeTransform {

  constructor(private dataService: DataService) { }

  transform(blurbName: string): string | undefined {
    /*if (!this.dataService.blurbs || !blurbName) { return; }

    const blurb = this.dataService.blurbs
      .filter(b => b.name.toLowerCase() === blurbName.toLowerCase())[0];

    return blurb ? blurb.blurb : undefined;*/
    return this.dataService.getBlurbByName(blurbName);
  }
}
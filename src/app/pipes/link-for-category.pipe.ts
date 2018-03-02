//#region Imports
import { Pipe, PipeTransform } from '@angular/core';
import { Link } from '@campcadet/model/link';
import { SimpleItem } from '@campcadet/model/simple-item';
//#endregion

@Pipe({
  name: 'linkForCategory'
})
export class LinkForCategoryPipe implements PipeTransform {

  transform(links: Link[], category: SimpleItem): Link[] {
    return links.filter(link => link.linkCategory.id === category.id)
      .sort((a, b) => {
        if (a.description > b.description) { return 1; }
        if (a.description < b.description) { return -1; }
        return 0;
      });
  }
}

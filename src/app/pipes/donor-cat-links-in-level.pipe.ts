//#region Imports
import { Pipe, PipeTransform } from '@angular/core';
import { DonorLevel } from '@campcadet/model/donor-level';
import { DonorCategoryLink } from '@campcadet/model/donor-category-link';
//#endregion

@Pipe({
  name: 'donorCatLinksInLevel'
})
export class DonorCatLinksInLevelPipe implements PipeTransform {

  transform(donorCatLinks: DonorCategoryLink[], level: DonorLevel): DonorCategoryLink[] {
    return donorCatLinks
      .filter(dcl => dcl.donor.displayOnWebsite && dcl.amountGiven >= level.amountLower && dcl.amountGiven <= level.amountUpper)
      .sort((a, b) => {
        if (a.donor.name > b.donor.name) { return 1; }
        if (a.donor.name < b.donor.name) { return -1; }
        return 0;
      });
  }

}

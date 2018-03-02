import { DonorCategory } from '@campcadet/model/donor-category';
import { Donor } from '@campcadet/model/donor';

export interface DonorCategoryLink {
    donor: Donor;
    donorCategory: DonorCategory;
    amountGiven?: number;
    notes: string;
}

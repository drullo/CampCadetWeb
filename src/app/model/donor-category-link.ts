import { DonorCategory } from './donor-category';
import { Donor } from './donor';

export interface DonorCategoryLink {
    donor: Donor;
    donorCategory: DonorCategory;
    amountGiven?: number;
    notes: string;
}

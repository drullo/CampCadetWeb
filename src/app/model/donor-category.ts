import { SimpleItem } from './simple-item';

export interface DonorCategory extends SimpleItem {
    enabled: boolean;
    sortPriority?: number;
    showDonorLevels?: boolean;
}

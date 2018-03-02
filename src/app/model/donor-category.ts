import { SimpleItem } from '@campcadet/model/simple-item';

export interface DonorCategory extends SimpleItem {
    enabled: boolean;
    sortPriority?: number;
    showDonorLevels?: boolean;
}

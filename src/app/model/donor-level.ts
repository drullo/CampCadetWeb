import { SimpleItem } from '@campcadet/model/simple-item';

export interface DonorLevel extends SimpleItem {
    amountLower: number;
    amountUpper: number;
    color?: string;
    fontColor?: string;
}

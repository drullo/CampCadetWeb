import { SimpleItem } from './simple-item';

export interface DonorLevel extends SimpleItem {
    amountLower: number;
    amountUpper: number;
    color?: string;
    fontColor?: string;
}

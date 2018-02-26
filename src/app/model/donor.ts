export interface Donor {
    id: number;
    name: string;
    displayOnWebsite: boolean;
    notes?: string;
    sortPriority?: number;
    website?: number;
    iconURL?: string;
}

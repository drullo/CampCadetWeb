import { SimpleItem } from '@campcadet/model/simple-item';

export interface Faq {
    id: number;
    question: string;
    answer: string;
    faqCategory: SimpleItem;
}

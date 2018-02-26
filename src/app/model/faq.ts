import { SimpleItem } from './simple-item';

export interface Faq {
    id: number;
    question: string;
    answer: string;
    faqCategory: SimpleItem;
}

import { SimpleItem } from './../model/simple-item';
import { Faq } from './../model/faq';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'faqForCategory'
})
export class FaqForCategoryPipe implements PipeTransform {

  transform(faqs: Faq[], category: SimpleItem): Faq[] {
    return faqs.filter(faq => faq.faqCategory.id === category.id)
      .sort((a, b) => {
        if (a.question > b.question) { return 1; }
        if (a.question < b.question) { return -1; }
        return 0;
      });
  }
}

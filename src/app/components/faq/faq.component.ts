import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MenuComponent } from '../menu/menu.component';
import { DataWaiterComponent } from '../data-waiter/data-waiter.component';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { FaqForCategoryPipe } from '../../pipes/faq-for-category.pipe';

@Component({
    selector: 'cc-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css'],
    imports: [
      MenuComponent,
      DataWaiterComponent, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, RouterLink, MatButton, MatIcon, FaqForCategoryPipe]
})
export class FAQComponent {
  dataService = inject(DataService);

}

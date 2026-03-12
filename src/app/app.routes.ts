import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' },
  { path: 'board', loadComponent: () => import('./components/board/board.component').then(m => m.BoardComponent) },
  { path: 'coh', loadComponent: () => import('./components/call-of-honor/call-of-honor.component').then(m => m.CallOfHonorComponent) },
  { path: 'donate', loadComponent: () => import('./components/donate/donate.component').then(m => m.DonateComponent) },
  { path: 'donors', loadComponent: () => import('./components/donors/donors.component').then(m => m.DonorsComponent) },
  { path: 'emailtest', loadComponent: () => import('./components/email-test/email-test.component').then(m => m.EmailTestComponent) },
  { path: 'enrollment', loadComponent: () => import('./components/enrollment/enrollment.component').then(m => m.EnrollmentComponent) },
  { path: 'faq', loadComponent: () => import('./components/faq/faq.component').then(m => m.FAQComponent) },
  { path: 'history', loadComponent: () => import('./components/history/history.component').then(m => m.HistoryComponent) },
  { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'links', loadComponent: () => import('./components/links/links.component').then(m => m.LinksComponent) },
  { path: 'prep', loadComponent: () => import('./components/preparation/preparation.component').then(m => m.PreparationComponent) },
  { path: 'print/:topic', loadComponent: () => import('./components/print/print.component').then(m => m.PrintComponent) },
  { path: 'requirements', loadComponent: () => import('./components/required-items/required-items.component').then(m => m.RequiredItemsComponent) },
  { path: 'rules', loadComponent: () => import('./components/rules/rules.component').then(m => m.RulesComponent) },

    { path: '**', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) }
];
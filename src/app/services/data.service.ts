import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { forkJoin } from 'rxjs';

import { Blurb } from '../model/blurb';
import { BoardMember } from '../model/board-member';
import { CampDates } from '../model/camp-dates';
import { ConfigSetting } from '../model/config-setting';
import { DonorCategoryLink } from '../model/donor-category-link';
import { DonorLevel } from '../model/donor-level';
import { Faq } from '../model/faq';
import { Link } from '../model/link';
import { SimpleItem } from '../model/simple-item';
import { BlurbsService } from './blurbs.service';
import { BoardService } from './board.service';
//import { CarouselService } from './carousel.service';
import { ConfigService } from './config.service';
import { ContactService } from './contact.service';
import { DateService } from './date.service';
import { DonorsService } from './donors.service';
import { FaqService } from './faq.service';
import { LinksService } from './links.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // bannerImages: { portrait: string[], landscape: string[] } = { portrait: [], landscape: [] };
  campDates: CampDates | undefined;
  blurbs: Blurb[] = [];
  campDirector: BoardMember | undefined;
  dataReady: boolean | undefined;
  boardMembers: BoardMember[] = [];
  boardMemberCategories: SimpleItem[] = [];
  donorCatLinks: DonorCategoryLink[] = [];
  donorCategories: SimpleItem[] = [];
  donorLevels: DonorLevel[] = [];
  // requirements: Requirement[];
  faqs: Faq[] = [];
  faqCategories: SimpleItem[] = [];
  links: Link[] = [];
  linkCategories: SimpleItem[] = [];
  // requiredItems: RequiredItem[];
  // rules: SimpleItem[];
  contactTypes: SimpleItem[] = [];
  contactReasons: SimpleItem[] = [];
  boardDirectors: BoardMember[] = [];
  configSettings: ConfigSetting[] = [];

  constructor(private blurbService: BlurbsService,
    private boardService: BoardService,
    //carouselService: CarouselService,
    private configService: ConfigService,
    private contactService: ContactService,
    private dateService: DateService,
    private donorService: DonorsService,
    private faqService: FaqService,
    private linkService: LinksService) {

  }

  getData(): void {
    // Banner images - portrait
    /* this.carouselService.getPortraitImages()
      .subscribe(data => data.forEach(i => this.bannerImages.portrait.push(`${config.api}/${i}`))); */
    // Banner images = landscape
    /* this.carouselService.getLandscapeImages()
      .subscribe(data => data.forEach(i => this.bannerImages.landscape.push(`${config.api}/${i}`))); */

    forkJoin([
      this.dateService.getCurrent(),
      this.blurbService.getBlurbs(),
      this.boardService.getMembers(),
      this.contactService.getContactCategories(),
      this.contactService.getContactReasons(),
      this.donorService.getDonorLevels(),
      this.donorService.getDonorCategoryLinks(),
      this.faqService.getFaqs(),
      this.linkService.getLinks(),
      this.configService.getAllSettings()
    ]).subscribe(([dates, blurbs, boardMembers, contactCategories, contactReasons, donorLevels, donorCategoryLinks, faqs, links, config]) => {
      this.campDates = dates[0];
      this.blurbs = blurbs;
      this.contactTypes = contactCategories;
      this.contactReasons = contactReasons;
      this.configSettings = config;

      this.donorLevels = donorLevels.sort((a, b) => {
        if (a.amountLower < b.amountLower) { return 1; }
        if (a.amountLower > b.amountLower) { return -1; }
        return 0;
      });

      //#region Donor/Category Links
      this.donorCategories = [];

      const duplicateDonorCategories = donorCategoryLinks.map(d => {
        return { id: d.donorCategory.id, description: d.donorCategory.description };
      });

      duplicateDonorCategories.forEach(cat => {
        const existingIds = this.donorCategories.map(existing => existing.id);

        if (existingIds.indexOf(cat.id) === -1) {
          this.donorCategories.push(cat);
        }
      });

      this.donorCatLinks = donorCategoryLinks;
      //#endregion

      //#region FAQs
      this.faqCategories = [];

      const duplicateFaqCategories = faqs.map(d => {
        return { id: d.faqCategory.id, description: d.faqCategory.description };
      });

      duplicateFaqCategories.forEach(cat => {
        const existingIds = this.faqCategories.map(existing => existing.id);

        if (existingIds.indexOf(cat.id) === -1) {
          this.faqCategories.push(cat);
        }
      });

      this.faqCategories = this.faqCategories.sort((a, b) => {
        if (a.description > b.description) { return 1; }
        if (a.description < b.description) { return -1; }
        return 0;
      });

      this.faqs = faqs;
      //#endregion

      //#region Links
      this.linkCategories = [];

      const duplicateLinkCategories = links.map(d => {
        return { id: d.linkCategory.id, description: d.linkCategory.description };
      });

      duplicateLinkCategories.forEach(cat => {
        const existingIds = this.linkCategories.map(existing => existing.id);

        if (existingIds.indexOf(cat.id) === -1) {
          this.linkCategories.push(cat);
        }
      });

      this.linkCategories = this.linkCategories.sort((a, b) => {
        if (a.description > b.description) { return 1; }
        if (a.description < b.description) { return -1; }
        return 0;
      });

      this.links = links;
      //#endregion
      
      //#region Board Members
      this.campDirector = boardMembers
        .filter(m => m.title === 'Camp Director')[0];

      this.boardMemberCategories = [];

      const duplicateBoardCategories = boardMembers.map(d => {
        return { id: d.boardMemberCategory.id, description: d.boardMemberCategory.description };
      });

      duplicateBoardCategories.forEach(cat => {
        const existingIds = this.boardMemberCategories.map(existing => existing.id);

        if (existingIds.indexOf(cat.id) === -1) {
          this.boardMemberCategories.push(cat);
        }
      });

      this.boardMemberCategories = this.boardMemberCategories.sort((a, b) => {
        if (a.description > b.description) { return 1; }
        if (a.description < b.description) { return -1; }
        return 0;
      });

      this.boardMembers = boardMembers
        .filter(member => member.enabled);

      this.boardDirectors = boardMembers
        .filter(member => member.enabled && member.boardMemberCategory.description.toLowerCase() === 'directors');
      //#endregion
    
      this.afterDataRetrieved();
    });
  }

  private afterDataRetrieved(): void {
    if (
      !this.blurbs ||
      !this.campDirector ||
      //!this.campDates ||
      !this.boardDirectors ||
      !this.boardMembers ||
      !this.contactReasons ||
      !this.contactTypes ||
      !this.donorLevels ||
      !this.donorCategories ||
      !this.donorCatLinks ||
      !this.faqCategories ||
      !this.faqs ||
      !this.links ||
      !this.linkCategories ||
      // !this.requirements ||
      // !this.requiredItems ||
      // !this.rules ||
      !this.configSettings) {
      return;
    }

    if (this.campDates) {
      const startDate = DateTime.fromISO(this.campDates.startDate).toLocaleString(DateTime.DATE_SHORT);
      const endDate = DateTime.fromISO(this.campDates.endDate).toLocaleString(DateTime.DATE_SHORT);
      const dueDate = this.campDates.applicationDeadline ?
        DateTime.fromISO(this.campDates.applicationDeadline).toLocaleString(DateTime.DATE_SHORT) :
        null;
      const appsAvailableDate = this.campDates.applicationsAvailableBeginning ?
        DateTime.fromISO(this.campDates.applicationsAvailableBeginning).toLocaleString(DateTime.DATE_SHORT) :
        null;
      const orientationDate = this.campDates.orientationDate ?
        DateTime.fromISO(this.campDates.orientationDate).toLocaleString(DateTime.DATE_SHORT) :
        null;

      this.blurbs.forEach(blurb => {
        blurb.blurb = blurb.blurb
          .replace(new RegExp('{startDate}', 'g'), startDate)
          .replace(new RegExp('{endDate}', 'g'), endDate)
          .replace(new RegExp('{dueDate}', 'g'), dueDate ?? '')
          .replace(new RegExp('{availableDate}', 'g'), appsAvailableDate ?? '')
          .replace(new RegExp('{orientationDate}', 'g'), orientationDate ?? '')
          .replace(new RegExp('{directorPrefix}', 'g'), this.campDirector?.prefix ?? '')
          .replace(new RegExp('{directorFirstName}', 'g'), this.campDirector?.firstName ?? '')
          .replace(new RegExp('{directorLastName}', 'g'), this.campDirector?.lastName ?? '');
      });
    }

    this.dataReady = true;
  }

  getBlurbByName(blurbName: string): string | undefined {
    return this.blurbs?.find(b => b.name.toLowerCase() === blurbName.toLowerCase())?.blurb;
  }

  getContactTypeById(id: number): string | undefined {
    return this.contactTypes?.find(t => t.id === id)?.description;
  }

  getContactReasonById(id: number): string | undefined {
    return this.contactReasons?.find(r => r.id === id)?.description;
  }
}
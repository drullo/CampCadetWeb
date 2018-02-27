import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import * as moment from 'moment';

import { Blurb } from './../model/blurb';
import { BoardMember } from './../model/board-member';
import { CampDates } from './../model/camp-dates';
import { ConfigSetting } from './../model/config-setting';
import { DonorCategoryLink } from './../model/donor-category-link';
import { DonorLevel } from './../model/donor-level';
import { Faq } from './../model/faq';
import { Link } from './../model/link';
import { Requirement } from './../model/requirement';
import { RequiredItem } from './../model/required-item';
import { SimpleItem } from './../model/simple-item';

import { BlurbsService } from './blurbs.service';
import { BoardService } from './board.service';
import { CarouselService } from './carousel.service';
import { ConfigService } from './config.service';
import { ContactService } from './contact.service';
import { DateService } from './date.service';
import { DonorsService } from './donors.service';
import { FaqService } from './faq.service';
import { LinksService } from './links.service';
import { RequirementsService } from './requirements.service';
import { RequiredItemsService } from './required-items.service';
import { RulesService } from './rules.service';

@Injectable()
export class DataService {
  // bannerImages: { portrait: string[], landscape: string[] } = { portrait: [], landscape: [] };
  campDates: CampDates;
  blurbs: Blurb[];
  campDirector: BoardMember;
  dataReady: boolean;
  boardMembers: BoardMember[];
  boardMemberCategories: SimpleItem[];
  donorCatLinks: DonorCategoryLink[];
  donorCategories: SimpleItem[];
  donorLevels: DonorLevel[];
  requirements: Requirement[];
  faqs: Faq[];
  faqCategories: SimpleItem[];
  links: Link[];
  linkCategories: SimpleItem[];
  requiredItems: RequiredItem[];
  rules: SimpleItem[];
  contactTypes: SimpleItem[];
  contactReasons: SimpleItem[];
  boardDirectors: BoardMember[];
  configSettings: ConfigSetting[];

  constructor(private blurbService: BlurbsService,
    private boardService: BoardService,
    private carouselService: CarouselService,
    private configService: ConfigService,
    private contactService: ContactService,
    private dateService: DateService,
    private donorService: DonorsService,
    private faqService: FaqService,
    private linkService: LinksService,
    private requirementsService: RequirementsService,
    private requiredItemsService: RequiredItemsService,
    private rulesService: RulesService) {

  }

  getData(): void {
    // Banner images - portrait
    /* this.carouselService.getPortraitImages()
      .subscribe(data => data.forEach(i => this.bannerImages.portrait.push(`${environment.apiUrl}/${i}`))); */
    // Banner images = landscape
    /* this.carouselService.getLandscapeImages()
      .subscribe(data => data.forEach(i => this.bannerImages.landscape.push(`${environment.apiUrl}/${i}`))); */

    // Camp dates
    this.dateService.getCurrent().subscribe(data => {
      this.campDates = data[0];
      this.afterDataRetrieved();
    });

    // Blurbs
    this.blurbService.getBlurbs().subscribe(data => {
      this.blurbs = data;
      this.afterDataRetrieved();
    });

    // Camp Director
    this.boardService.getMembers().subscribe(data => {
      this.campDirector = data.filter(m => m.title === 'Camp Director')[0];
      this.afterDataRetrieved();
    });

    // Board members & categories
    this.boardService.getMembers().subscribe(data => {
      this.boardMemberCategories = [];

      const duplicateCategories = data.map(d => {
        return { id: d.boardMemberCategory.id, description: d.boardMemberCategory.description };
      });

      duplicateCategories.forEach(cat => {
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

      this.boardMembers = data
        .filter(member => member.enabled);

      this.boardDirectors = data
        .filter(member => member.enabled && member.boardMemberCategory.description.toLowerCase() === 'directors');

      this.afterDataRetrieved();
    });

    // Contact categories
    this.contactService.getContactCategories()
      .subscribe(data => {
        this.contactTypes = data;
        this.afterDataRetrieved();
      });

    // Contact reasons
    this.contactService.getContactReasons()
      .subscribe(data => {
        this.contactReasons = data;
        this.afterDataRetrieved();
      });

    // Donor levels
    this.donorService.getDonorLevels()
      .subscribe(data => {
        this.donorLevels = data.sort((a, b) => {
          if (a.amountLower < b.amountLower) { return 1; }
          if (a.amountLower > b.amountLower) { return -1; }
          return 0;
        });

        this.afterDataRetrieved();
      });

    // Donor categories & Donor/Category links
    this.donorService.getDonorCategoryLinks().subscribe(data => {
      this.donorCategories = [];

      const duplicateCategories = data.map(d => {
        return { id: d.donorCategory.id, description: d.donorCategory.description };
      });

      duplicateCategories.forEach(cat => {
        const existingIds = this.donorCategories.map(existing => existing.id);

        if (existingIds.indexOf(cat.id) === -1) {
          this.donorCategories.push(cat);
        }
      });

      this.donorCatLinks = data;
      this.afterDataRetrieved();
    });

    // Eligibility requirements
    this.requirementsService.getRequirements()
      .subscribe(data => {
        this.requirements = data;
        this.afterDataRetrieved();
      });

    // FAQs
    this.faqService.getFaqs().subscribe(data => {
      this.faqCategories = [];

      const duplicateCategories = data.map(d => {
        return { id: d.faqCategory.id, description: d.faqCategory.description };
      });

      duplicateCategories.forEach(cat => {
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

      this.faqs = data;
      this.afterDataRetrieved();
    });

    // Links
    this.linkService.getLinks().subscribe(data => {
      this.linkCategories = [];

      const duplicateCategories = data.map(d => {
        return { id: d.linkCategory.id, description: d.linkCategory.description };
      });

      duplicateCategories.forEach(cat => {
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

      this.links = data;
      this.afterDataRetrieved();
    });

    // Required items
    this.requiredItemsService.getItems()
      .subscribe(data => {
        this.requiredItems = data;
        this.afterDataRetrieved();
      });

    // Rules
    this.rulesService.getRules()
      .subscribe(data => {
        this.rules = data;
        this.afterDataRetrieved();
      });

    this.configService.getAllSettings().subscribe(data => {
      this.configSettings = data;
      this.afterDataRetrieved();
    });
  }

  afterDataRetrieved(): void {
    if (
      !this.blurbs ||
      !this.campDirector ||
      !this.campDates ||
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
      !this.requirements ||
      !this.requiredItems ||
      !this.rules ||
      !this.configSettings) {
      return;
    }

    const startDate = moment(this.campDates.startDate).format('LL');
    const endDate = moment(this.campDates.endDate).format('LL');
    const dueDate = moment(this.campDates.applicationDeadline).format('LL');
    const appsAvailableDate = moment(this.campDates.applicationsAvailableBeginning).format('LL');
    const orientationDate = moment(this.campDates.orientationDate).format('LL');

    this.blurbs.forEach(blurb => {
      blurb.blurb = blurb.blurb
        .replace(new RegExp('{startDate}', 'g'), startDate)
        .replace(new RegExp('{endDate}', 'g'), endDate)
        .replace(new RegExp('{dueDate}', 'g'), dueDate)
        .replace(new RegExp('{availableDate}', 'g'), appsAvailableDate)
        .replace(new RegExp('{orientationDate}', 'g'), orientationDate)
        .replace(new RegExp('{directorPrefix}', 'g'), this.campDirector.prefix)
        .replace(new RegExp('{directorFirstName}', 'g'), this.campDirector.firstName)
        .replace(new RegExp('{directorLastName}', 'g'), this.campDirector.lastName);
    });

    this.dataReady = true;
  }
}

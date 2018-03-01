import { ToastsManager } from 'ng2-toastr';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CampDates } from './../../../model/camp-dates';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DateService } from './../../../services/date.service';

@Component({
  selector: 'cc-camp-dates',
  templateUrl: './camp-dates.component.html',
  styleUrls: ['./camp-dates.component.css']
})
export class CampDatesComponent implements OnInit {
  selectedTabIndex = 0;
  campDates: CampDates[];
  updateRecord: CampDates;

  constructor(private dateService: DateService,
    public dialogRef: MatDialogRef<CampDatesComponent>,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.refreshData();
  }

  refreshData(): void {
    this.dateService.getAll().subscribe(data => this.campDates = data.sort((a, b) => {
      if (a.startDate > b.startDate) { return -1; }
      if (a.startDate < b.startDate) { return 1; }
      return 0;
    }));
  }

  dateSelected(value: Date): void {
    this.updateRecord = this.campDates.find(d => d.startDate === value);
  }

  update(): void {
    this.dateService.update(this.updateRecord).subscribe(() => {
      this.toastr.success('Updated camp dates', 'Success');
      this.refreshData();
    },
    err => {
      this.toastr.error('Failed to update camp dates', 'Failure');
      console.log(err);
    });
  }

  delete(): void {
    this.dateService.delete(this.updateRecord).subscribe(() => {
      this.toastr.success('Deleted camp dates', 'Success');
      this.refreshData();
    },
    err => {
      this.toastr.error('Failed to delete camp dates', 'Failure');
      console.log(err);
    });
  }

  add(form: any): void {
    const dates: CampDates = {
      startDate: form.startDate,
      endDate: form.endDate,
      applicationsAvailableBeginning: form.availableDate,
      applicationDeadline: form.dueDate,
      orientationDate: form.orientationDate
    };

    this.dateService.add(dates).subscribe(() => {
      this.toastr.success('Added camp dates', 'Success');
      this.refreshData();
    },
    err => {
      this.toastr.error('Failed to add camp dates', 'Failure');
      console.log(err);
    });
  }
}

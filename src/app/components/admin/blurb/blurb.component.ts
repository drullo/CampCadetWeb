//#region Imports
import { Component, OnInit, Inject, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastsManager } from 'ng2-toastr';
import { Blurb } from '@campcadet/model/blurb';
import { BlurbsService } from '@campcadet/services/blurbs.service';
import { DataService } from '@campcadet/services/data.service';
//#endregion

@Component({
  selector: 'cc-blurb',
  templateUrl: './blurb.component.html',
  styleUrls: ['./blurb.component.css']
})
export class BlurbComponent implements OnInit {
  blurbName: string;
  blurb: Blurb;

  //#region Lifecycle
  constructor(private dataService: DataService,
    private blurbService: BlurbsService,
    public dialogRef: MatDialogRef<BlurbComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {

      this.blurbName = data.blurbName;
      this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
    this.blurb = this.dataService.blurbs
      .find(blurb => blurb.name.toLowerCase() === this.blurbName.toLowerCase());
  }
  //#endregion

  update(): void {
    this.blurbService.update(this.blurb).subscribe(() => {
      this.toastr.success('Updated blurb', 'Success');
    },
    err => {
      this.toastr.error('Failed to update blurb', 'Failure');
      console.log(err);
    });
  }
}

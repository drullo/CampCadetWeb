import { AuthenticationService } from './../services/authentication.service';
import { BlurbComponent } from './../components/admin/blurb/blurb.component';
import { MatDialog } from '@angular/material/dialog';

export class BlurbEditable {
    constructor(private dialog: MatDialog, private authenticationService: AuthenticationService) {

    }

    editBlurb(blurbName: string) {
        if (!this.authenticationService.loggedIn) { return; }

        this.dialog.open(BlurbComponent, {
            data: { blurbName: blurbName },
            width: '100vw'
        });
    }
}

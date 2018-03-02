import { AuthenticationService } from '@campcadet/services/authentication.service';
import { BlurbComponent } from '@campcadet/components/admin/blurb/blurb.component';
import { MatDialog } from '@angular/material/dialog';

export class BlurbEditable {
    constructor(private dialog: MatDialog, public authenticationService: AuthenticationService) {

    }

    editBlurb(blurbName: string) {
        if (!this.authenticationService.loggedIn) { return; }

        this.dialog.open(BlurbComponent, {
            data: { blurbName: blurbName },
            width: '100vw'
        });
    }
}

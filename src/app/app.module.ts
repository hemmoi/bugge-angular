import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BugListingComponent } from './bug-listing/bug-listing.component';
import { BugDetailsComponent } from './bug-details/bug-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BugListingComponent,
    BugDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

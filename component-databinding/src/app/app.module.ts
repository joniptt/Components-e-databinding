import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddblueprintComponent } from './addblueprint/addblueprint.component';
import { AddserverComponent } from './addserver/addserver.component';
import { AppComponent } from './app.component';
import { ServerblueprintComponent } from './serverblueprint/serverblueprint.component';
import { ServernameComponent } from './servername/servername.component';
import { ServerslistComponent } from './serverslist/serverslist.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    AddserverComponent,
    ServerblueprintComponent,
    AddblueprintComponent,
    TitleComponent,
    ServernameComponent,
    ServerslistComponent,
  ],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

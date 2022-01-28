import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AddserverComponent } from './addserver/addserver.component';
import { InputserverComponent } from './inputserver/inputserver.component';
import { InputblueprintComponent } from './inputblueprint/inputblueprint.component';
import { AddblueprintComponent } from './addblueprint/addblueprint.component';
import { ServerslistComponent } from './serverslist/serverslist.component';

@NgModule({
  declarations: [AppComponent, AddserverComponent, InputserverComponent, InputblueprintComponent, AddblueprintComponent, ServerslistComponent],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

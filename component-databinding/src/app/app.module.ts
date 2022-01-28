import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { InputserverComponent } from './inputserver/inputserver.component';
import { ServerslistComponent } from './serverslist/serverslist.component';

@NgModule({
  declarations: [AppComponent, InputserverComponent, ServerslistComponent],
  imports: [BrowserModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

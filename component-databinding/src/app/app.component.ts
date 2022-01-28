import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showServer = false;
  parentServers = [];
  onServerAdd(serverData: { serverName: string; serverType: string }) {
    this.parentServers.push({
      type: serverData.serverType,
      name: serverData.serverName,
    });
    this.showServer = true;

    console.log(serverData);
  }
  onBlueprintAdd(serverData: any) {
    this.parentServers.push({
      type: serverData.serverType,
      name: serverData.serverName,
    });
    this.showServer = true;
    console.log(serverData);
  }
  constructor() {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  servers = [];
  serverName = '';
  serverBlueprint = '';
  showServers = false;
  addServer() {
    if (this.serverName != '') {
      this.servers.push({
        type: 'server',
        name: this.serverName,
      });
      this.showServers = true;
    } else {
      console.log('Não foi possivel adicionar o servidor');
    }
  }
  addBlueprint() {
    if (this.serverName != '') {
      this.servers.push({
        type: 'blueprint',
        name: this.serverBlueprint,
      });
      this.showServers = true;
    } else {
      console.log('Não foi possivel adicionar o servidor');
    }

    console.log(this.servers);
  }
}

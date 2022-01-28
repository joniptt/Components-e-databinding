import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inputserver',
  templateUrl: './inputserver.component.html',
  styleUrls: ['./inputserver.component.css'],
})
export class InputserverComponent {
  @Output() addBlueprint = new EventEmitter<any>();
  @Output() addServers = new EventEmitter<any>();
  childBlueprint = '';
  childServer = '';
  constructor() {}

  addNewServer() {
    if (this.childServer != '') {
      this.addServers.emit({
        serverName: this.childServer,
        serverType: 'server',
      });
      console.log();
    } else {
      console.log('Não foi possivel adicionar o servidor');
    }
  }

  addNewBlueprint() {
    if (this.childBlueprint != '') {
      this.addBlueprint.emit({
        serverName: this.childBlueprint,
        serverType: 'blueprint',
      });
    } else {
      console.log('Não foi possivel adicionar o servidor');
    }
  }
}

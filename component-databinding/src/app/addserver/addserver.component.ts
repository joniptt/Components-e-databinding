import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-addserver',
  templateUrl: './addserver.component.html',
  styleUrls: ['./addserver.component.css'],
})
export class AddserverComponent implements OnInit {
  showServers = false;
  @Input() parentName: string;
  servers = [];

  addServer() {
    if (this.parentName != '') {
      this.servers.push({
        type: 'server',
        name: this.parentName,
      });
      this.showServers = true;
    } else {
      console.log('Não foi possivel adicionar o servidor');
    }
    console.log(this.parentName);
  }
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-addblueprint',
  templateUrl: './addblueprint.component.html',
  styleUrls: ['./addblueprint.component.css'],
})
export class AddblueprintComponent implements OnInit {
  @Input() parentBlueprint: string;
  showServers = false;
  parentServers = [];

  addBlueprint() {
    if (this.parentBlueprint != '') {
      this.parentServers.push({
        type: 'blueprint',
        name: this.parentBlueprint,
      });
      this.showServers = true;
    } else {
      console.log('Não foi possivel adicionar o servidor');
    }
  }
  constructor() {}

  ngOnInit(): void {}
}

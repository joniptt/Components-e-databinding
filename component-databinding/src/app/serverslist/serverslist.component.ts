import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-serverslist',
  templateUrl: './serverslist.component.html',
  styleUrls: ['./serverslist.component.css'],
})
export class ServerslistComponent {
  @Input('srvElement') servers: { type: string; name: string };

  constructor() {}
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerslistComponent } from './serverslist.component';

describe('ServerslistComponent', () => {
  let component: ServerslistComponent;
  let fixture: ComponentFixture<ServerslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

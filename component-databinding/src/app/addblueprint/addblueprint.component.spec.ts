import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblueprintComponent } from './addblueprint.component';

describe('AddblueprintComponent', () => {
  let component: AddblueprintComponent;
  let fixture: ComponentFixture<AddblueprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddblueprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddblueprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerblueprintComponent } from './serverblueprint.component';

describe('ServerblueprintComponent', () => {
  let component: ServerblueprintComponent;
  let fixture: ComponentFixture<ServerblueprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerblueprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerblueprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

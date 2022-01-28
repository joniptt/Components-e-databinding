import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputblueprintComponent } from './inputblueprint.component';

describe('InputblueprintComponent', () => {
  let component: InputblueprintComponent;
  let fixture: ComponentFixture<InputblueprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputblueprintComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputblueprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputserverComponent } from './inputserver.component';

describe('InputserverComponent', () => {
  let component: InputserverComponent;
  let fixture: ComponentFixture<InputserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

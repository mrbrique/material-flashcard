import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanDeckComponent } from './fan-deck.component';

describe('FanDeckComponent', () => {
  let component: FanDeckComponent;
  let fixture: ComponentFixture<FanDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanDeckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

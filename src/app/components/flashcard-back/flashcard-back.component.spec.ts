import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardBackComponent } from './flashcard-back.component';

describe('FlashcardBackComponent', () => {
  let component: FlashcardBackComponent;
  let fixture: ComponentFixture<FlashcardBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

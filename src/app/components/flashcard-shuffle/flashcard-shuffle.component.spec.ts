import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardShuffleComponent } from './flashcard-shuffle.component';

describe('FlashcardShuffleComponent', () => {
  let component: FlashcardShuffleComponent;
  let fixture: ComponentFixture<FlashcardShuffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardShuffleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardShuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardBlockComponent } from './flashcard-block.component';

describe('FlashcardBlockComponent', () => {
  let component: FlashcardBlockComponent;
  let fixture: ComponentFixture<FlashcardBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlashcardBlockComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

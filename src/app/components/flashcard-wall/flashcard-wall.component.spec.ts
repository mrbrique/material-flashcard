import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardWallComponent } from './flashcard-wall.component';

describe('FlashcardWallComponent', () => {
  let component: FlashcardWallComponent;
  let fixture: ComponentFixture<FlashcardWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlashcardWallComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

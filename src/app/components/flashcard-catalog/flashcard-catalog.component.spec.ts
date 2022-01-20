import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardCatalogComponent } from './flashcard-catalog.component';

describe('FlashcardCatalogComponent', () => {
  let component: FlashcardCatalogComponent;
  let fixture: ComponentFixture<FlashcardCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlashcardCatalogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashcardCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

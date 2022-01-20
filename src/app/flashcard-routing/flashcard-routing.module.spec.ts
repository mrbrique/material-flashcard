import { FlashcardRoutingModule } from './flashcard-routing.module';

describe('FlashcardRoutingModule', () => {
  let flashcardRoutingModule: FlashcardRoutingModule;

  beforeEach(() => {
    flashcardRoutingModule = new FlashcardRoutingModule();
  });

  it('should create an instance', () => {
    expect(flashcardRoutingModule).toBeTruthy();
  });
});

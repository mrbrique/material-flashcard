import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlashcardComponent } from '../components/flashcard/flashcard.component';
import { DeckComponent } from '../components/deck/deck.component';
import { HandComponent } from '../components/hand/hand.component';
import { ShuffleComponent } from '../components/shuffle/shuffle.component';
import { FlashcardCatalogComponent } from '../components/flashcard-catalog/flashcard-catalog.component';
import { FlashcardWallComponent } from '../components/flashcard-wall/flashcard-wall.component';
import { SplashScreenComponent } from '../components/splash-screen/splash-screen.component';
import { FanDeckComponent } from '../components/fan-deck/fan-deck.component';

const routes: Routes = [
  { path: 'card/:item', component: HandComponent },
  { path: 'shuffle', component: ShuffleComponent },
  { path: 'catalog', component: FlashcardCatalogComponent },
  { path: 'wall', component: FlashcardWallComponent },
  { path: 'fan', component: FanDeckComponent },
  { path: '', component: SplashScreenComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FlashcardRoutingModule { }

// @angular dependency
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

// @angular/material dependency
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';

// app dependency
import { AppComponent } from './app.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { FlashcardRoutingModule } from './flashcard-routing/flashcard-routing.module';
import { DeckComponent } from './components/deck/deck.component';
import { HexColorPipe } from './pipe/hex-color.pipe';
import { ParseIntPipePipe } from './pipe/parse-int-pipe.pipe';
import { HandComponent } from './components/hand/hand.component';
import { FlashcardCatalogComponent } from './components/flashcard-catalog/flashcard-catalog.component';
import { FlashcardWallComponent } from './components/flashcard-wall/flashcard-wall.component';
import { FlashcardBlockComponent } from './components/flashcard-block/flashcard-block.component';
import { FlashcardDetailComponent } from './components/flashcard-detail/flashcard-detail.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { FanDeckComponent } from './components/fan-deck/fan-deck.component';
import { FlashcardBackComponent } from './components/flashcard-back/flashcard-back.component';
import { FlashcardShuffleComponent } from './components/flashcard-shuffle/flashcard-shuffle.component';

@NgModule({
  declarations: [
    AppComponent,
    FlashcardComponent,
    DeckComponent,
    HexColorPipe,
    HandComponent,
    FlashcardCatalogComponent,
    FlashcardWallComponent,
    FlashcardBlockComponent,
    ParseIntPipePipe,
    FlashcardDetailComponent,
    SplashScreenComponent,
    FanDeckComponent,
    FlashcardBackComponent,
    FlashcardShuffleComponent
  ],
  imports: [
    BrowserModule,
    FlashcardRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    LayoutModule,
    FlexLayoutModule,
    VirtualScrollerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

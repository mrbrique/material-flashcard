import { Component, OnInit } from '@angular/core';

import { Material } from '../../material/shared/material.model';
import { CodepointService } from '../../service/codepoint.service';

@Component({
  selector: 'flashcard-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.less']
})
export class SplashScreenComponent implements OnInit {

  cardDisplay: Material[] = new Array();
  // flashcard display material

  readonly deckCount: Number = 5;
  // number of cards in deck

  constructor(
    private codepointService: CodepointService
  ) {
  }

  ngOnInit(): void {
    for (let i = 0; i < this.deckCount; i++) {
      // rnadom 5 cards for splash screen
      this.codepointService.getIndexedCodepoint(Math.floor(Math.random() * 999)).subscribe(
        cp => this.cardDisplay.push(new Material(cp))
      );
    }
  }

}

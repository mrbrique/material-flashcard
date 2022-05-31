import { Component, OnInit } from '@angular/core';

import { CodepointService } from '../../service/codepoint.service';
import { Material } from '../../material/shared/material.model';

@Component({
  selector: 'fan-deck',
  templateUrl: './fan-deck.component.html',
  styleUrls: ['./fan-deck.component.less']
})
export class FanDeckComponent implements OnInit {

  readonly deckCount: Number = 13;
  // number of cards in deck

  cardDisplay: Material[] = new Array();


  constructor(
    private codepointService: CodepointService

  ) { }

  ngOnInit(): void {
    for (let i = 0; i < this.deckCount; i++) {
      // rnadom 5 cards for splash screen
      this.codepointService.getIndexedCodepoint(Math.floor(Math.random() * 999)).subscribe(
        cp => this.cardDisplay.push(new Material(cp))
      );
    }
  }

  styleRotate(i: number) {
    return { 'transform': `rotate(${i * 360 / this.cardDisplay.length}deg) translateY(64px)` };
  }


}

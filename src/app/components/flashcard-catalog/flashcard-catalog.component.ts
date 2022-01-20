import { Component, OnInit, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { FlashcardComponent } from '../flashcard/flashcard.component';
import { Material } from '../../material/shared/material.model';
import { Codepoint } from '../../material/shared/codepoint.model';
import { CodepointService } from '../../service/codepoint.service';

const DISPLAYMENT_OFFSET = 6;
const SKEW_DEGREE = 2;

@Component({
  selector: 'flashcard-catalog',
  templateUrl: './flashcard-catalog.component.html',
  styleUrls: ['./flashcard-catalog.component.css'],
  animations: [
    trigger('elevation', [
      state('bringup', style({
        'box-shadow': '0 7px 8px -4px rgba(0,0,0,.2), 0 12px 17px 2px rgba(0,0,0,.14), 0 5px 22px 4px rgba(0,0,0,.12)',
        top: '-5px'
      })),
      state('putdown', style({
        'box-shadow': '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
        top: '0px'
      })),
      transition('* => bringup', [animate('200ms ease-in')]),
      transition('* => putdown', [animate(150)])
    ])
  ]
})
export class FlashcardCatalogComponent implements OnInit {

  materials: Material[] = [];
  jumbleStyles: any[] = [];
  private mousehoverIndex: number;

  constructor(
    private element: ElementRef,
    private codepointService: CodepointService) { }

  ngOnInit() {
    this.codepointService.getCodepoints().subscribe(
      (codepoints: Codepoint[]) => {
        for (let cp of codepoints) {
          this.materials.push(new Material(cp));
          this.jumbleStyles.push(this.jumbleStyle());
        }

      }
    );
  }

  jumbleStyle() {
    let style = {
      'transform': `rotate(${this.flip(Math.random() * SKEW_DEGREE)}deg)`,
      // limit the origin to the 20-60%
      'transform-origin': `${Math.random() * 40 + 20}% ${Math.random() * 40 + 20}%`
    };

    return style;
  }

  onFlashcardClick(mat: Material) {
    this.element.nativeElement.dispatchEvent(new CustomEvent('cardclick', { detail: mat, bubbles: true }));

  }

  private flip(value: number): number {
    return (this.hasChance(50) ? -1 : 1) * value;
  }

  private hasChance(precent: number): boolean {
    return Math.random() * 100 < precent;
  }

  get hoverIndex() {
    return this.mousehoverIndex;
  }

  set hoverIndex(value: number) {
    this.mousehoverIndex = value;
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

import { Material } from '../../material/shared/material.model';

@Component({
  selector: 'flashcard-block',
  templateUrl: './flashcard-block.component.html',
  styleUrls: [
    './flashcard-block.component.css',
    './flashcard-block.component.less'
  ],
  animations: [
    // flipping flashcard-block
    trigger('flip', [
      state('flat', style({ transform: 'rotateY(0deg)' })),
      state('flip', style({ transform: 'rotateY(180deg)' })),
      transition('flat => flip', [animate('1s')]),
      transition('flip => flat', [animate(0)])
    ]),
    // sliding mask
    trigger('slide', [
      state('up', style({ top: '-100%' })),
      state('down', style({ top: '0' })),
      transition('down => up', animate('0.5s 6s')),
      transition('up => down', animate(0))
    ])
  ]
})
export class FlashcardBlockComponent implements OnInit {

  @Input() material: Material;

  maskMaterial: Material;
  next: Material;

  isFlipped: boolean = false;
  maskVisible: boolean = false;

  constructor() { }

  ngOnInit() {
    this.copyToMask();
  }

  copyToMask() {
    this.maskMaterial = this.material;
  }


  flip() {
    this.isFlipped = true;
  }

  onFlipComplete(event) {
    if (event.toState == 'flip') {
      // slide trigger
      this.maskVisible = true;
      this.material = this.next;
      // unflip
      this.isFlipped = false;
    }
  }

  onSlideComplete(event) {
    if (event.toState == 'up') {
      this.maskVisible = false;
      this.copyToMask();
    }
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Material } from '../../material/shared/material.model';

@Component({
  selector: 'flashcard-detail',
  templateUrl: './flashcard-detail.component.html',
  styleUrls: ['./flashcard-detail.component.less']
})
export class FlashcardDetailComponent implements OnInit {

  @Input() material: Material;

  // close detail button event
  @Output() closeDetail = new EventEmitter();

  constructor(
  ) {
  }

  ngOnInit() {
  }

  onCloseDetailClick() {
    console.log('onDetailCloseClick');
    this.closeDetail.emit();
  }

}

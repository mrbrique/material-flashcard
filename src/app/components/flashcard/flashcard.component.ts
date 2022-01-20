import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Material } from '../../material/shared/material.model';
import { Codepoint } from '../../material/shared/codepoint.model';
import { CodepointService } from '../../service/codepoint.service';

@Component({
  selector: 'mat-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css', './flashcard.component.less']
})
export class FlashcardComponent implements OnInit {

  @Input() material: Material;

  constructor() { }

  ngOnInit() {

  }
}

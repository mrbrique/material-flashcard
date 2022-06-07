import { Component, OnInit, Input } from '@angular/core';

import { Material } from '../../material/shared/material.model';
import { CodepointService } from '../../service/codepoint.service';

@Component({
  selector: 'mat-flashcard-back',
  templateUrl: './flashcard-back.component.html',
  styleUrls: ['./flashcard-back.component.less']
})
export class FlashcardBackComponent implements OnInit {

  @Input() material: Material;

  constructor(
    private codepointService: CodepointService

  ) { }

  ngOnInit(): void {
    this.codepointService.getIndexedCodepoint(Math.floor(Math.random() * 999)).subscribe(
      cp => this.material = new Material(cp)
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

import { MatIconRegistry } from "@angular/material/icon";


import { Material } from '../../material/shared/material.model';
import { Codepoint } from '../../material/shared/codepoint.model';
import { CodepointService } from '../../service/codepoint.service';



@Component({
  selector: 'flashcard-shuffle',
  templateUrl: './flashcard-shuffle.component.html',
  styleUrls: ['./flashcard-shuffle.component.less']
})
export class FlashcardShuffleComponent implements OnInit {
  materials: Material[] = [];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private codepointService: CodepointService
  ) {
    this.matIconRegistry.addSvgIcon("swipe-up",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/swipe-up.svg")
    );
  }

  ngOnInit(): void {
    this.codepointService.getCodepoints().subscribe(
      (codepoints: Codepoint[]) => {
        for (let cp of codepoints) {
          this.materials.push(new Material(cp));
        }
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';

import { Material } from '../../material/shared/material.model';
import { Codepoint } from '../../material/shared/codepoint.model';
import { CodepointService } from '../../service/codepoint.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  materials: Material[] = [];

  constructor(private codepointService: CodepointService) { }

  ngOnInit() {

    this.codepointService.getCodepoints().subscribe(
      (codepoints: Codepoint[]) => {
        for (let cp of codepoints) {
          this.materials.push(new Material(cp));
        }

      }
    );
  }

}

import { Component, OnInit } from '@angular/core';

import { CodepointService } from '../../service/codepoint.service';
import { Codepoint } from '../../material/shared/codepoint.model';
import { Material } from '../../material/shared/material.model';


@Component({
  selector: 'app-shuffle',
  templateUrl: './shuffle.component.html',
  styleUrls: ['./shuffle.component.css']
})
export class ShuffleComponent implements OnInit {



  material: Material;

  constructor(private codepointService: CodepointService) { }

  ngOnInit() {
    this.codepointService.getCodepoints().subscribe(
      (codepoints: Codepoint[]) => {
        let index = Math.round(Math.random() * codepoints.length);
        this.codepointService.getIndexedCodepoint(index).subscribe(
          cp => this.material = new Material(cp)
        );
      }
    );
  }

}

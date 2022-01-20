import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';


import { FlashcardBlockComponent } from '../flashcard-block/flashcard-block.component';
import { Material } from '../../material/shared/material.model';
import { Codepoint } from '../../material/shared/codepoint.model';
import { CodepointService } from '../../service/codepoint.service';

const GRID_COL = 5;
const GRID_ROW = 4;
const FLIP_BASE_SEC = 3;
const FLIP_VARIANT_SEC = 3;


@Component({
  selector: 'flashcard-wall',
  templateUrl: './flashcard-wall.component.html',
  styleUrls: ['./flashcard-wall.component.css']
})
export class FlashcardWallComponent implements OnInit {

  materials: Material[] = [];

  choosen: Material[] = [];

  gridColumns = GRID_COL;
  gridRows = GRID_ROW;
  blockCounts = this.gridColumns * this.gridRows;

  @ViewChildren(FlashcardBlockComponent) blocks: QueryList<FlashcardBlockComponent>;


  constructor(private codepointService: CodepointService) { }

  ngOnInit() {
    this.codepointService.getCodepoints().subscribe(
      (codepoints: Codepoint[]) => {
        for (let cp of codepoints) {
          this.materials.push(new Material(cp));
        }

        for (let i = 0; i < this.blockCounts; i++) {
          let index = Math.floor(this.materials.length * Math.random());
          this.choosen.push(this.materials[index]);
        }

      }
    );
  }

  ngAfterViewInit() {
    setTimeout(() => this.flipOne(), this.flipTimeout());
  }

  flipOne() {
    let pick: number = Math.round(this.blocks.length * Math.random());
    let blockCmp: FlashcardBlockComponent = this.blocks.find(function(t, i, arr) {
      return i == pick;
    })!;

    if (blockCmp) {
      let next: number = Math.floor(this.materials.length * Math.random());
      blockCmp.next = this.materials[next];
      blockCmp.flip();
    }

    setTimeout(() => this.flipOne(), this.flipTimeout());
  }

  flipTimeout() {
    return 1000 * ((Math.random() * FLIP_VARIANT_SEC) + FLIP_BASE_SEC);
  }

}

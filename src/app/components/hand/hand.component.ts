import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';




import { Material } from '../../material/shared/material.model';
import { Codepoint } from '../../material/shared/codepoint.model';
import { CodepointService } from '../../service/codepoint.service';


@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  material: Material;

  constructor(
    private route: ActivatedRoute,
    private codepointService: CodepointService
  ) {

  }

  ngOnInit() {
    const item = this.route.snapshot.paramMap.get('item')!;
    let index = parseInt(item);
    if (isNaN(index)) {
      this.codepointService.getCodepoint(item).subscribe(
        cp => this.material = new Material(cp)
      );
    } else {
      this.codepointService.getIndexedCodepoint(index).subscribe(
        cp => this.material = new Material(cp)
      );
    }


  }

}

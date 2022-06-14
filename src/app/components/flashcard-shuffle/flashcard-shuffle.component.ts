import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { trigger, state, style, animate, transition } from '@angular/animations';


import { MatIconRegistry } from "@angular/material/icon";


import { Material } from '../../material/shared/material.model';
import { Codepoint } from '../../material/shared/codepoint.model';
import { CodepointService } from '../../service/codepoint.service';



@Component({
  selector: 'flashcard-shuffle',
  templateUrl: './flashcard-shuffle.component.html',
  styleUrls: ['./flashcard-shuffle.component.less'],
  animations: [
    trigger('fadeout', [
      state('persist', style({
        opacity: 1
      })),
      state('ceased', style({
        opacity: 0
      })),
      transition('* => ceased', [animate(200)]),
      transition('* => persist', [animate(50)])
    ])
  ]
})
export class FlashcardShuffleComponent implements OnInit {
  materials: Material[] = [];
  idle: boolean = false;
  idleTimeoutId: number;

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

    this.idleTimeout();
  }

  idleTimeout(): void {
    // fadeout visual conponent after 3 seconds
    this.idleTimeoutId = window.setTimeout(() => {
      this.idle = true;
    }, 3000);
  }

  @HostListener('touchstart')
  @HostListener('window:mousemove')
  @HostListener('window:mousedown')
  resetIdleTimeout(): void {
    // bring back to persist state
    this.idle = false;
    // cancel the timeout
    window.clearTimeout(this.idleTimeoutId);
    // relaunch it
    this.idleTimeout();
  }

}

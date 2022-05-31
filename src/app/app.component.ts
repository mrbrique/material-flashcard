import { Component, ViewChild, OnInit, HostBinding } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

import { MatDrawer } from '@angular/material/sidenav';
import { MatIconRegistry } from "@angular/material/icon";

import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointState } from "@angular/cdk/layout";
import { Router, NavigationStart } from "@angular/router";
import { MediaChange, MediaObserver } from '@angular/flex-layout';

import { Material } from './material/shared/material.model';
import { Observable } from "rxjs";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {


  @ViewChild('drawerFlashcard') drawer: MatDrawer;

  selectedMaterial: Material;

  title = 'material-flashcard';

  largeScreen: boolean;

  constructor(
    private mediaObserver: MediaObserver,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {

    this.matIconRegistry.addSvgIcon("flashcard-logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/flashcard-logo_filled.svg")
    );

    this.matIconRegistry.addSvgIcon("catalogue",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/catalogue.svg")
    );

    this.matIconRegistry.addSvgIcon("wall",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/wall.svg")
    );


    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // close drawer when route change
        this.drawer.close();
      }
    });
  }

  ngOnInit() { }

  onCardClick(event) {
    if (!this.mediaObserver.isActive('lt-md')) {
      this.drawer.open();
      this.selectedMaterial = event.detail;
    }
  }

  onCloseDetail() {
    this.drawer.close();
  }

}

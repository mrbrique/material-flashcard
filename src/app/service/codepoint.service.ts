import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { find, map } from 'rxjs/operators';

import { Material } from '../material/shared/material.model';
import { Codepoint } from '../material/shared/codepoint.model';



@Injectable({
  providedIn: 'root'
})

export class CodepointService {

  private codepointUrl: string = 'assets/codepoints.json';

  constructor(private http: HttpClient) { }

  getCodepoints(): Observable<Codepoint[]> {
    return this.http.get<Codepoint[]>(this.codepointUrl);
  }

  getCodepoint(name: string): Observable<Codepoint> {
    return this.http.get<Codepoint[]>(this.codepointUrl).pipe(
      map(codepoints => codepoints.find(cp => cp.name === name)!)
    );
  }

  getIndexedCodepoint(index: number): Observable<Codepoint> {
    return this.http.get<Codepoint[]>(this.codepointUrl).pipe(
      map(codepoints => codepoints.find(cp => cp.index === index)!)
    );
  }

}

import { Injectable } from '@angular/core';

import { Color } from '../material/shared/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor() { }

  static pick(seed: string): Color {
    let sum = 0;
    for (var i: number = 0; i < seed.length; i++) {
      sum += seed.codePointAt(i)!;
    }

    return Color.PREDEFINED[sum % Color.PREDEFINED.length];
  }
}

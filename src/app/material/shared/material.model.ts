import { Codepoint } from './codepoint.model';
import { Color } from './color.model';

import { ColorService } from '../../service/color.service';

export class Material {

  constructor(private codepoint: Codepoint) { }

  literal(): string {
    return this.codepoint.name.replace(/_/g, ' ');
  }

  prefix(): string {
    return this.codepoint.name.charAt(0);
  }

  color(): Color {
    return ColorService.pick(this.codepoint.name);
  }

  getCodepoint(): Codepoint {
    return this.codepoint;
  }
}



export class Color {

  static readonly PREDEFINED = [
    new Color('red', '#EC1F26'),
    new Color('yellow', '#FFD92E'),
    new Color('pink', '#F289AA'),
    new Color('orange', '#F37C28'),
    new Color('purple', '#98377C'),
    new Color('blue', '#0096D5'),
    new Color('green', '#60A74A'),
    new Color('violet', '#5E549B')
  ];

  name: string;

  hexRgb: string;

  constructor(name: string, rgb: string) {
    this.name = name;
    this.hexRgb = rgb;
  }
}

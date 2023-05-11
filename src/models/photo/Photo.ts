/*
 * @author Team-Beta
 * @Project React-App-Frontend
 * @Copyright (C) 2023 Newcastle University, UK
 */

class Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;

  constructor(
    _height: number,
    _html_attributions: string[],
    _photo_reference: string,
    _width: number
  ) {
    this.height = _height;
    this.html_attributions = _html_attributions;
    this.photo_reference = _photo_reference;
    this.width = _width;
  }
}

export default Photo;

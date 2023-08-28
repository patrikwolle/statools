import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sta-select-button',
  templateUrl: './sta-select-button.component.html',
  styleUrls: ['./sta-select-button.component.scss']
})
export class StaSelectButtonComponent {

  @Input('svgPath') pathToSvg: string = '';
  @Input('height') heightValue: string = '300px';
  @Input('width') widthValue: string = '300px';

  constructor() {
  }



}

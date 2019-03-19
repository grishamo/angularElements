import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CustomButtonComponent {
  @Input() name = 'friend';
  focus: string;
  focusSet = false;
  setFocus(value) {
    this.focus = value;
    this.focusSet = true;
  }
}

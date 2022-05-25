import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  canClick = false;
  message = ''
  controller = ''

  constructor() { }

  ngOnInit(): void {
    this.setButtonValues();
  }

  sayMessage() {
    alert('Clicked!');
  }

  onEditClick() {
    this.canClick = !this.canClick

    this.setButtonValues();
  }

  private setButtonValues() {
    if (this.canClick) {
      this.controller = 'disable'
      this.message = 'click me!'
    }
    else {
      this.controller = 'enable'
      this.message = `I'm read-only`
    }
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-editable-test-input',
  templateUrl: './editable-text-input.component.html',
  styleUrls: ['./editable-text-input.component.scss']
})
export class EditableTextInputComponent implements OnInit {
  isFocused = false;

  @Input()
  value: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(){
    this.isFocused = false;
  }

  onFocus(){
    this.isFocused = true;
  }
}

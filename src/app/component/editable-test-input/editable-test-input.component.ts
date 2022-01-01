import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-editable-test-input',
  templateUrl: './editable-test-input.component.html',
  styleUrls: ['./editable-test-input.component.scss']
})
export class EditableTestInputComponent implements OnInit {
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

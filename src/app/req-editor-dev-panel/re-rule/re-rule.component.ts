import {Component, OnInit} from '@angular/core';
import {MatFormFieldControl} from '@angular/material/form-field'

@Component({
  selector: 'app-re-rule',
  templateUrl: './re-rule.component.html',
  styleUrls: ['./re-rule.component.scss']
})
export class ReRuleComponent implements OnInit {
  isExpanded = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleExpand()
  {
    this.isExpanded = !this.isExpanded;
  }
}

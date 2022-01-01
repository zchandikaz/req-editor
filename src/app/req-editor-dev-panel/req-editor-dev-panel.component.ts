import {Component, OnInit} from '@angular/core';
import {ReRule} from "../obj/ReRule";
import {MatSnackBar} from "@angular/material/snack-bar";
import {max} from "rxjs";

@Component({
  selector: 'app-req-editor-dev-panel',
  templateUrl: './req-editor-dev-panel.component.html',
  styleUrls: ['./req-editor-dev-panel.component.scss']
})
export class ReqEditorDevPanelComponent implements OnInit {
  rules: ReRule[] = [
    new ReRule(1),
    new ReRule(2),
  ];

  isEnabled = true;

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  expandAll() {
    this.rules.forEach(v => v.isExpanded = true);
  }

  collapseAll() {
    this.rules.forEach(v => v.isExpanded = false);
  }

  save(notify = true) {
    if (notify) {
      this.snackBar.open("All rules saved!")
    }
  }

  reset() {
    this.rules = [];
    this.snackBar.open("All rules were cleared!")
    this.save(false);
  }

  addNewRule() {
    let id = this.rules.length == 0 ? 1 : this.rules.map(v => v.id).reduce((a, b) => a > b ? a : b) + 1;
    this.rules.push(new ReRule(id));
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight), 100);
  }

  removeRule(rule: ReRule) {
    this.rules = this.rules.filter(v => v.id != rule.id);
  }
}

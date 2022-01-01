import {Component, OnInit} from '@angular/core';
import {ReRule} from "../obj/ReRule";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-req-editor-dev-panel',
  templateUrl: './req-editor-dev-panel.component.html',
  styleUrls: ['./req-editor-dev-panel.component.scss']
})
export class ReqEditorDevPanelComponent implements OnInit {
  rules: ReRule[] = [
    new ReRule(),
    new ReRule(),
  ];

  isEnabled = true;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  expandAll(){
    this.rules.forEach(v=>v.isExpanded=true);
  }

  collapseAll(){
    this.rules.forEach(v=>v.isExpanded=false);
  }

  save(){
    this.snackBar.open("All rules saved!")
  }

  reset(){
    this.rules = [];
    this.snackBar.open("All rules were cleared!")
  }

  addNewRule(){
    this.rules.push(new ReRule())
    setTimeout(()=>window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight),100);

  }
}

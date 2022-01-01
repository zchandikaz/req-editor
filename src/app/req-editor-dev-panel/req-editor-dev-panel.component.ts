import { Component, OnInit } from '@angular/core';
import {ReRule} from "../obj/ReRule";

@Component({
  selector: 'app-req-editor-dev-panel',
  templateUrl: './req-editor-dev-panel.component.html',
  styleUrls: ['./req-editor-dev-panel.component.scss']
})
export class ReqEditorDevPanelComponent implements OnInit {
  rules: ReRule[] = [
    new ReRule(),
    new ReRule(),
    new ReRule(),
  ];

  isEnabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  expandAll(){
    this.rules.forEach(v=>v.isExpanded=true);
  }

  collapseAll(){
    this.rules.forEach(v=>v.isExpanded=false);
  }
}

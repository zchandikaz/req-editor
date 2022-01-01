import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ReRule} from "../../obj/ReRule";

@Component({
  selector: 'app-re-rule',
  templateUrl: './re-rule.component.html',
  styleUrls: ['./re-rule.component.scss']
})
export class ReRuleComponent implements AfterViewInit  {
  REGEX_FILTER = ReRule.REGEX_FILTER;
  URL_FILTER = ReRule.URL_FILTER;

  @Input()
  rule: ReRule = new ReRule();

  @ViewChild('contentCard', { static: false, read: ElementRef }) elementView: ElementRef = {} as ElementRef;

  constructor() {
  }

  ngAfterViewInit(): void {

  }

  toggleExpand()
  {
    this.rule.isExpanded = !this.rule.isExpanded;
  }

  applyCollapseCardStyle(){

    if(!this.rule.isExpanded) {
      const style = {
        'margin-bottom': '-'+(<HTMLElement>this.elementView.nativeElement).getBoundingClientRect().height+'px'
      }
      return style;
    } else {
      return {};
    }
  }
}

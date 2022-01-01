import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ReRule} from "../../obj/ReRule";
import {EReRuleAction, EReRuleActionItem, ReRuleAction} from "../../obj/ReRuleAction";

@Component({
  selector: 'app-re-rule',
  templateUrl: './re-rule.component.html',
  styleUrls: ['./re-rule.component.scss']
})
export class ReRuleComponent implements AfterViewInit {
  REGEX_FILTER = ReRule.REGEX_FILTER;
  URL_FILTER = ReRule.URL_FILTER;

  EReRuleAction = EReRuleAction;
  ruleActions: ReRuleAction[] = [];

  @Input()
  rule: ReRule = new ReRule();

  @ViewChild('contentCard', {static: false, read: ElementRef}) elementView: ElementRef = {} as ElementRef;

  constructor() {
  }

  ngAfterViewInit(): void {

  }

  toggleExpand() {
    this.rule.isExpanded = !this.rule.isExpanded;
  }

  applyCollapseCardStyle() {

    if (!this.rule.isExpanded) {
      const style = {
        'margin-bottom': '-' + (<HTMLElement>this.elementView.nativeElement).getBoundingClientRect().height + 'px'
      }
      return style;
    } else {
      return {};
    }
  }

  addRuleAction(ruleAction: EReRuleActionItem) {
    this.ruleActions.push(new ReRuleAction(ruleAction));
  }

  checkRuleActionDisableStatus(ruleAction: EReRuleActionItem) {
    switch (ruleAction) {
      case EReRuleAction.ALLOW:
      case EReRuleAction.BLOCK:
      case EReRuleAction.ALLOW_ALL_REQUESTS:
        return this.ruleActions.filter(v => [EReRuleAction.ALLOW, EReRuleAction.BLOCK, EReRuleAction.ALLOW_ALL_REQUESTS].includes(v.ruleActionCodeName)).length > 0;
        break;
      case EReRuleAction.REDIRECT:
      case EReRuleAction.UPGRADE_SCHEME:
        return this.ruleActions.filter(v => [EReRuleAction.REDIRECT, EReRuleAction.UPGRADE_SCHEME].includes(v.ruleActionCodeName)).length > 0;
        break;
      case EReRuleAction.MODIFY_HEADERS:
        return this.ruleActions.filter(v => [EReRuleAction.MODIFY_HEADERS].includes(v.ruleActionCodeName)).length > 0;
    }
    return false;
  }

  removeRuleAction(deleteRuleAction: ReRuleAction) {
    this.ruleActions = this.ruleActions.filter(ra => ra.ruleActionCodeName.code != deleteRuleAction.ruleActionCodeName.code);
  }
}

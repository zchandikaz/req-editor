export class ReRuleAction {
  private _ruleActionCodeName: EReRuleActionItem;

  constructor(ruleAction: EReRuleActionItem) {
    this._ruleActionCodeName = ruleAction;
  }

  get ruleActionCodeName(): EReRuleActionItem {
    return this._ruleActionCodeName;
  }

  set ruleActionCodeName(value: EReRuleActionItem) {
    this._ruleActionCodeName = value;
  }
}

export class EReRuleActionItem {
  public code: string;
  public name: string;

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }
}

export class EReRuleAction {
  public static _UNDEFINED = new EReRuleActionItem('undefined', 'UNDEFINED');

  public static BLOCK = new EReRuleActionItem('block', 'Block');
  public static ALLOW = new EReRuleActionItem('allow', 'Allow');
  public static ALLOW_ALL_REQUESTS = new EReRuleActionItem('allowAllRequests', 'Allow All Requests');
  public static REDIRECT = new EReRuleActionItem('redirect', 'Redirect');
  public static UPGRADE_SCHEME = new EReRuleActionItem('upgradeScheme', 'Upgrade Scheme');
  public static MODIFY_HEADERS = new EReRuleActionItem('modifyHeaders', 'Modify Headers');
}

export class ReRule{
  public static  REGEX_FILTER : string = "RegEx";
  public static URL_FILTER : string = "URL";

  priority = 1;
  filterType = ReRule.URL_FILTER;
  isEnabled = true;
  filterValue = '';
  id: number;

  description='Untitled Rule';
  isExpanded = true;

  constructor(id: number) {
    this.id = id;
  }
}

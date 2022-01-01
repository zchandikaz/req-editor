export class ReRule{
  public static  REGEX_FILTER : string = "RegEx";
  public static URL_FILTER : string = "URL";

  priority = 1;
  filterType = ReRule.URL_FILTER;
  isEnabled = true;
  filterValue = '';

  description='Untitled Rule';
  isExpanded = true;
}

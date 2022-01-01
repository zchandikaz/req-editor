import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReRuleComponent } from './re-rule.component';

describe('ReRuleComponent', () => {
  let component: ReRuleComponent;
  let fixture: ComponentFixture<ReRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

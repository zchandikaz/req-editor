import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqEditorDevPanelComponent } from './req-editor-dev-panel.component';

describe('ReqEditorDevPanelComponent', () => {
  let component: ReqEditorDevPanelComponent;
  let fixture: ComponentFixture<ReqEditorDevPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqEditorDevPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqEditorDevPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

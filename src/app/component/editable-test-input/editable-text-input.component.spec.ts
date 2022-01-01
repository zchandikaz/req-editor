import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTextInputComponent } from './editable-text-input.component';

describe('EditableTestInputComponent', () => {
  let component: EditableTextInputComponent;
  let fixture: ComponentFixture<EditableTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableTextInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

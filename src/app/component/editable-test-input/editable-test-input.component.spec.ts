import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTestInputComponent } from './editable-test-input.component';

describe('EditableTestInputComponent', () => {
  let component: EditableTestInputComponent;
  let fixture: ComponentFixture<EditableTestInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableTestInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTestInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

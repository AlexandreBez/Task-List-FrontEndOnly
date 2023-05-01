import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationTaskComponent } from './creation-task.component';

describe('CreationTaskComponent', () => {
  let component: CreationTaskComponent;
  let fixture: ComponentFixture<CreationTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

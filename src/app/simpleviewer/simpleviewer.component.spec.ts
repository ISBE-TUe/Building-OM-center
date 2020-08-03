import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleviewerComponent } from './simpleviewer.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

describe('SimpleviewerComponent', () => {
  let component: SimpleviewerComponent;
  let fixture: ComponentFixture<SimpleviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleviewerComponent ],
      imports: [
        MatSliderModule,
        MatSlideToggleModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

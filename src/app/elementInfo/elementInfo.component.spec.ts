import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementInfoComponent } from './elementInfo.component';
import { TriplefilterPipe } from '../triplefilter.pipe';
import { MatTableModule } from '@angular/material/table';
//import { MatTreeModule, MatIconModule, MatButtonModule  } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('ElementInfoComponent', () => {
  let component: ElementInfoComponent;
  let fixture: ComponentFixture<ElementInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementInfoComponent ],
      imports: [
        TriplefilterPipe,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule, 
        NoopAnimationsModule,
        //MatTreeModule,
       // MatIconModule,
       // MatButtonModule,
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

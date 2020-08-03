import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ElementInfoComponent } from './elementInfo/elementInfo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SimpleviewerComponent } from './simpleviewer/simpleviewer.component';
import {MatSliderModule} from '@angular/material/slider';
import { SensordataComponent } from './sensorData/sensordata.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SimpleSiteHeaderComponent } from './appHeader/simple-site-header.component';
import { TriplefilterPipe } from './triplefilter.pipe';
import { ContainfilterPipe } from './containfilter.pipe';
import {MatTreeModule} from '@angular/material/tree';
import { FilterpipePipe } from './filterpipe.pipe';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    ElementInfoComponent,
    SimpleviewerComponent,
    SensordataComponent,
    SimpleSiteHeaderComponent,
    TriplefilterPipe,
    ContainfilterPipe,
    FilterpipePipe,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSliderModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTreeModule,
    FormsModule,
    ChartsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

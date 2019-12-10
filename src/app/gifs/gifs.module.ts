import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '../store/store.module';
import { GifAPIActions } from './api/actions';
import { GifAPIService } from './api/service';
import { GifsRoutingModule } from './gifs-routing.module';
import { GifsComponent } from './gifs.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GifAPIHttpService } from './api/http-service';
import { ShowOneGifAPIActions } from '../gif/api/actions';

@NgModule({
  declarations: [
    GifsComponent,
    SearchFieldComponent,
    ResultsListComponent,
  ],
  imports: [
    StoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GifsRoutingModule
  ],
  providers: [GifAPIActions, GifAPIService, GifAPIHttpService, ShowOneGifAPIActions],
})
export class GifsModule { }

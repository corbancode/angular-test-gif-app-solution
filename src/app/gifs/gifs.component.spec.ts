import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsComponent } from './gifs.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { StoreModule } from '../store/store.module';
import { RouterTestingModule } from '@angular/router/testing';
import { GifsRoutingModule } from './gifs-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgReduxTestingModule } from '@angular-redux/store/lib/testing';
import { HttpClientModule } from '@angular/common/http';
import { GifAPIService } from './api/service';
import { GifAPIHttpService } from './api/http-service';
import { GifAPIActions } from './api/actions';
import { ShowOneGifAPIActions } from '../gif/api/actions';

describe('GifsComponent', () => {
  let component: GifsComponent;
  let fixture: ComponentFixture<GifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFieldComponent, ResultsListComponent, GifsComponent ],
      imports: [StoreModule, RouterTestingModule,
        GifsRoutingModule, FormsModule, ReactiveFormsModule, NgReduxTestingModule, HttpClientModule],
      providers: [GifAPIService, GifAPIHttpService, GifAPIActions, ShowOneGifAPIActions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

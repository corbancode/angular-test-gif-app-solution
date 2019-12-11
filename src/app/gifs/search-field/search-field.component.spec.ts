import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFieldComponent } from './search-field.component';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultsListComponent } from '../results-list/results-list.component';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { GifAPIService } from '../api/service';
import { GifAPIActions } from '../api/actions';
import { GifAPIHttpService } from '../api/http-service';
import { HttpClientModule } from '@angular/common/http';
import { ShowOneGifAPIActions } from '../../gif/api/actions';
import { GifsRoutingModule } from '../gifs-routing.module';
import { GifsComponent } from '../gifs.component';
import { StoreModule } from '../../store/store.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFieldComponent, ResultsListComponent, GifsComponent ],
      imports: [StoreModule, RouterTestingModule,
        GifsRoutingModule, FormsModule, ReactiveFormsModule, NgReduxTestingModule, HttpClientModule],
      providers: [GifAPIService, GifAPIHttpService, GifAPIActions, ShowOneGifAPIActions]
    })
    .compileComponents();

    MockNgRedux.reset();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should know when the gifs are loading', done => {
    const fixture = TestBed.createComponent(SearchFieldComponent);
    const searchFieldPage = fixture.debugElement.componentInstance;

    const stub = MockNgRedux.getSelectorStub(['gifs', 'loading']);
    stub.next(true);
    stub.complete();

    searchFieldPage.loading$
      .subscribe(
        actualSequence => expect(actualSequence).toEqual(true),
        null,
        done);
  });

  it('should know when there\'s an error', done => {
    const fixture = TestBed.createComponent(SearchFieldComponent);
    const searchFieldPage = fixture.debugElement.componentInstance;

    const stub = MockNgRedux.getSelectorStub(['gifs', 'error']);
    stub.next(false);
    stub.complete();

    searchFieldPage.error$
      .subscribe(
        actualSequence => expect(actualSequence).toEqual(false),
        null,
        done);
  });

  it(`should have name as 'Search Field'`, async(() => {
    const fixture = TestBed.createComponent(SearchFieldComponent);
    const searchFieldPage = fixture.debugElement.componentInstance;
    expect(searchFieldPage.name).toEqual('Search Field');
  }));
});

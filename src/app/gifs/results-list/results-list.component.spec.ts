import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListComponent } from './results-list.component';
import { ShowOneGifAPIActions } from '../../gif/api/actions';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsListComponent ],
      imports: [NgReduxTestingModule, RouterTestingModule],
      providers: [ShowOneGifAPIActions],
    })
    .compileComponents();
    MockNgRedux.reset();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

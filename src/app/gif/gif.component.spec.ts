import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifComponent } from './gif.component';
import { StoreModule } from '../store/store.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/lib/testing';
import { HttpClientModule } from '@angular/common/http';
import { GifAPIService } from '../gifs/api/service';
import { GifAPIHttpService } from '../gifs/api/http-service';
import { GifAPIActions } from '../gifs/api/actions';
import { ShowOneGifAPIActions } from './api/actions';

describe('GifComponent', () => {
  let component: GifComponent;
  let fixture: ComponentFixture<GifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifComponent ],
      imports: [StoreModule, RouterTestingModule, FormsModule, ReactiveFormsModule, NgReduxTestingModule, HttpClientModule],
      providers: [GifAPIService, GifAPIHttpService, GifAPIActions, ShowOneGifAPIActions]
    })
    .compileComponents();

    MockNgRedux.reset();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});

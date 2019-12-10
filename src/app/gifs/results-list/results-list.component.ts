import { Component, OnInit, Input } from '@angular/core';
import { IGif } from '../model';
import { Observable } from 'rxjs';
import { ShowOneGifAPIActions } from 'src/app/gif/api/actions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  @Input() gifs: Observable<IGif[]>;
  @Input() loading: Observable<boolean>;
  @Input() error: Observable<any>;

  // Since we're observing an array of items, we need to set up a 'trackBy'
  // parameter so Angular doesn't tear down and rebuild the list's DOM every
  // time there's an update.
  getKey(_, gif: IGif) {
    return gif.id;
  }
  constructor(private showOneGifApiActions: ShowOneGifAPIActions, private router: Router) {
  }

  showGif(gif: IGif) {
    this.showOneGifApiActions.loadSucceeded(gif);
    this.router.navigate(['/gif']);
  }

  ngOnInit() {
  }

}

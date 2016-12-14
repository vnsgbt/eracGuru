import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { GuruSearchService } from './guru-search.service';
import { Guru } from './Guru';

@Component({
  moduleId: module.id,
  selector: 'guru-search',
  templateUrl: '../app/partial/guru-search.component.html',
  styleUrls: [ '../app/partial/guru-search.component.css' ],
  providers: [GuruSearchService]
})

export class GuruSearchComponent implements OnInit {
  gurus: Observable<Guru[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private GuruSearchService: GuruSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.gurus = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.GuruSearchService.search(term)
        // or the observable of empty Gurus if no search term
        : Observable.of<Guru[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Guru[]>([]);
      });
  }
  
  gotoDetail(Guru: Guru): void {
    let link = ['/detail', Guru.id];
    this.router.navigate(link);
  }
}

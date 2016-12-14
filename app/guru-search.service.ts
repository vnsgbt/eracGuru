import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Guru }           from './guru';

@Injectable()
export class GuruSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Guru[]> {
    return this.http
               .get(`app/gurus/?name=${term}`)
               .map((r: Response) => r.json().data as Guru[]);
  }
}



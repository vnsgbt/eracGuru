import { Injectable } from '@angular/core'
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Guru } from './guru'

@Injectable()
export class GuruService {
    private gurusUrl = 'api/gurus'

    constructor(private http: Http){}

    getGurus(): Promise<Guru[]> {
        return this.http.get(this.gurusUrl)
            .toPromise()
            .then(resp => resp.json().data as Guru[])
            .catch(this.handleError)
        
        // return Promise.resolve(GURUS)
        
        // return new Promise<Guru[]>(
        //     res => setTimeout(res, 2000)
        // )
        // .then(() => GURUS)
    }

    handleError(err: any): Promise<any> {
        console.error('An error occurred', err); // for demo purposes only
        return Promise.reject(err.message || err);
    }

    getGuru(id: number): Promise<Guru>{
        let url = `${this.gurusUrl}/${id}`
        return this.http.get(url)
            .toPromise()
            .then(resp => resp.json().data as Guru)
            .catch(this.handleError)

        // return this.getGurus()
        //     .then(gurus => gurus.find(guru => guru.id === id))
    }
}

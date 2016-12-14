import { Injectable } from '@angular/core'

import { Guru } from './guru'
import { GURUS } from './mock-gurus'

@Injectable()
export class GuruService {
    getGurus(): Promise<Guru[]> {
        return Promise.resolve(GURUS)
        // return new Promise<Guru[]>(
        //     res => setTimeout(res, 2000)
        // )
        // .then(() => GURUS)
    }
    getGuru(id: number): Promise<Guru>{
        return this.getGurus()
            .then(gurus => gurus.find(guru => guru.id === id))
    }
}

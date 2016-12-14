import { Injectable } from '@angular/core'

import { Guru } from './guru'
import { GURUS } from './mock-gurus'

@Injectable()
export class GuruService {
    getGurus(): Promise<Guru[]> {
        // return Promise.resolve(GURUS)
        return new Promise<Guru[]>(
            res => setTimeout(res, 2000)
        )
        .then(() => GURUS)
    }
}

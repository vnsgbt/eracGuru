import { Injectable } from '@angular/core'

import { Guru } from './guru'
import { GURUS } from './mock-gurus'

@Injectable()
export class GuruService {
    getGurus(): Guru[] {
        return GURUS
    }
}

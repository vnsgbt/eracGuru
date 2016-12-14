import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let gurus = [
        { id: 11, name: 'Wendy'},
        { id: 12, name: 'Adam'},
        { id: 13, name: 'Anantha'},
        { id: 19, name: 'Shaul'},
        { id: 20, name: 'Jon'},
        { id: 14, name: 'Dan'},
        { id: 15, name: 'Rich'},
        { id: 16, name: 'Harita'},
        { id: 17, name: 'Tim'},
        { id: 18, name: 'Steve'},
    ];
    return {gurus};
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  private mainURL: string = 'https://localhost:44364/';

  constructor() { }

  legs = {
    getLegFlights: this.mainURL + 'legs/getLegFlights',
    getLegDetailsById: this.mainURL + 'legs/getLegDetailsById',
  }

}

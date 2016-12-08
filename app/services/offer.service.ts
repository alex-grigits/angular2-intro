import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class OfferService {
    
    constructor(private http: Http) {}

    fetchCities() {
        return this.http.get('app/api-data/cities.json')
            .map(res => res.json());
    }

    fetchHotels() {
    return this.http.get('app/api-data/hotels.json')
        .map(res => res.json());
    }
}
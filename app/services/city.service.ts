import { Injectable } from '@angular/core';

import { City } from '../classes/city';
import { cities } from '../api-data/cities-data';

@Injectable()

export class CityService {
    
    getCities(): Promise<City[]> {
        return Promise.resolve(cities);
    }

    getCity(id: number){
        return this.getCities()
                   .then(cities => cities.find(city => city.id === id));
    }
}
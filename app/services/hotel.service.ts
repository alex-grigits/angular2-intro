import { Injectable } from '@angular/core';

import { Hotel }  from '../classes/hotel';
import { hotels } from '../api-data/hotels-data';

@Injectable()

export class HotelService {
    
    getHotels(): Promise<Hotel[]> {
        return Promise.resolve(hotels);
    }

    getHotel(id: number){
        return this.getHotels()
                   .then(hotels => hotels.find(hotel => hotel.id === id));
    }
}
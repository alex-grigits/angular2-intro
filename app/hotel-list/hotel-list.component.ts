import { Component, OnInit } from '@angular/core';

import { Hotel }             from '../classes/hotel';
import { HotelService }      from '../services/hotel.service';


@Component({
    moduleId: module.id,
    selector: 'hotel-list',
    templateUrl: 'hotel-list.component.html',
    styleUrls: ['hotel-list.component.css']
})

export class HotelListComponent implements OnInit{
    titleHotels: string = 'Hotels List';
    hotels: Hotel[];

    constructor (
        private hotelService: HotelService        
    ){}

    getHotels(): void {
        this.hotelService.getHotels().then(hotels => this.hotels = hotels);
    }

    ngOnInit(): void {
        this.getHotels();
    }
}
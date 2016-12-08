import { Component, OnInit } from '@angular/core';

import { OfferService }       from '../services/offer.service'; 

@Component({
    moduleId: module.id,
    selector: 'hotel-list',
    templateUrl: 'hotel-list.component.html',
    styleUrls: ['hotel-list.component.css']
})

export class HotelListComponent implements OnInit{
    titleHotels: string = 'Hotels List';
    hotels = <any>[];

    constructor (
        private hotelService: OfferService        
    ){}

    ngOnInit() {
        this.hotelService.fetchHotels()
            .subscribe(data => {
                this.hotels = data;
            });
    }
}
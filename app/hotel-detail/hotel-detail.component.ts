import 'rxjs/add/operator/switchMap';
import { Component, OnInit }     from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location }              from '@angular/common';

import { HotelService } from '../services/hotel.service';

@Component ({
    moduleId: module.id,
    selector: 'hotel-detail',
    templateUrl: 'hotel-detail.component.html',
    styleUrls: ['hotel-detail.component.css']
})

export class HotelDetailComponent implements OnInit {
    titleDetails: string = 'Hotel Details';
    hotel = <any>[];
    
    constructor (
        private hotelService: HotelService,
        private route: ActivatedRoute,
        private location: Location        
    ){}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.hotelService.getHotel(+params['id']))
            .subscribe(hotel => this.hotel = hotel);
    }
}
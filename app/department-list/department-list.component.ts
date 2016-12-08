import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { OfferService }       from '../services/offer.service';

@Component ({
    moduleId: module.id,
    selector: 'department-list',
    templateUrl: 'department-list.component.html',
    styleUrls: ['department-list.component.css']
})

export class DepartmentListComponent implements OnInit {
    titleCities = "Top Cities";
    cities = <any>[];

    constructor (
        private router: Router,
        private cityService: OfferService        
    ){}

    ngOnInit() {
        this.cityService.fetchCities()
            .subscribe(data => {
                this.cities = data;
            });
    }

}
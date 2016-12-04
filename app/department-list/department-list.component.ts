import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { City }              from '../classes/city';
import { CityService }       from '../services/city.service';

@Component ({
    moduleId: module.id,
    selector: 'department-list',
    templateUrl: 'department-list.component.html',
    styleUrls: ['department-list.component.css'],
    providers: [CityService]
})

export class DepartmentListComponent implements OnInit {
    titleCities = "Top Cities";
    cities: City[]; // пока не знаю зачем???
    
    selectedCity: City;

    constructor (
        private router: Router,
        private cityService: CityService        
    ){}

    getCities(): void {
        this.cityService.getCities().then(cities => this.cities = cities);
    }

    ngOnInit(): void {
        this.getCities();
    }

}
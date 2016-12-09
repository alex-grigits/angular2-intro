import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(cities: any, term: any): any {
        if(term == undefined) return cities;
        return cities.filter(function(city: any) {
            return city.name.toLowerCase().includes(term.toLowerCase()) 
        })
    }
}
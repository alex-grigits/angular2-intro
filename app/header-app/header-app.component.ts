import { Component } from '@angular/core';
import { DropdownDirective } from './dropdown.directive'; 

@Component({
    moduleId: module.id,
    selector: 'header-app',
    templateUrl: 'header-app.component.html',
    styleUrls: ['header-app.component.css']
})

export class HeaderAppComponent {
    isOpen = false;
    
    open() {
        return this.isOpen = !this.isOpen;
    }
}
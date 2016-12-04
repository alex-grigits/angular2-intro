import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }            from './app.component';
import { HeaderAppComponent }      from './header-app/header-app.component';
import { FooterAppComponent }      from './footer-app/footer-app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { HotelListComponent }      from './hotel-list/hotel-list.component';
import { HotelDetailComponent }    from './hotel-detail/hotel-detail.component';

import { CityService }  from './services/city.service';
import { HotelService } from './services/hotel.service';

import { AppRoutingModule } from './app-routing.module';   

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent, 
        DepartmentListComponent,
        HeaderAppComponent,
        FooterAppComponent,
        HotelListComponent,
        HotelDetailComponent
    ],
    providers: [
        CityService,
        HotelService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
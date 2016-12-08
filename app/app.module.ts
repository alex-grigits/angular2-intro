import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }            from './app.component';
import { HeaderAppComponent }      from './header-app/header-app.component';
import { FooterAppComponent }      from './footer-app/footer-app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { HotelListComponent }      from './hotel-list/hotel-list.component';
import { HotelDetailComponent }    from './hotel-detail/hotel-detail.component';

import { OfferService }  from './services/offer.service';
import { HotelService }  from './services/hotel.service'; // for hotel-detail

import { AppRoutingModule } from './app-routing.module';   

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
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
        OfferService,
        HotelService // for hotel-detail
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
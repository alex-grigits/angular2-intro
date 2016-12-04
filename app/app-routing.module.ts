import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';

import { DepartmentListComponent } from './department-list/department-list.component';
import { HotelListComponent }      from './hotel-list/hotel-list.component';
import { HotelDetailComponent }    from './hotel-detail/hotel-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/department-list', pathMatch: 'full'},
    { path: 'department-list', component: DepartmentListComponent },
    { path: 'hotel-list',  component: HotelListComponent },
    { path: 'hotel-detail/:id', component: HotelDetailComponent}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ] 
})

export class AppRoutingModule {}
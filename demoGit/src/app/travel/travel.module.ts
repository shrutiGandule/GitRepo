import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleTripComponent } from './single-trip/single-trip.component';
import { StudentTravelComponent } from './student-travel/student-travel.component';



@NgModule({
  declarations: [
    SingleTripComponent,
    StudentTravelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TravelModule { }

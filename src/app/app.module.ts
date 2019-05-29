import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import { ProfileComponent } from './profile/profile.component';
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

declare var require: any;

export function highchartsFactory() {
const hc = require('highcharts');
const dd = require('highcharts/modules/drilldown');
dd(hc);
return hc;
}
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChartComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    ReactiveFormsModule

  ],
  providers: [{
    provide: HighchartsStatic,
    useFactory: highchartsFactory
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }

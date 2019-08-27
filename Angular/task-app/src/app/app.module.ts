import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatInputModule, MatCardModule, MatIconModule, MatGridListModule, MatListModule, MatSidenavModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { WeathericonComponent } from './weathericon/weathericon.component';
@NgModule({
  declarations: [
    AppComponent,
    WeathericonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

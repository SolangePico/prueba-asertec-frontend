import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import { HealthComponent } from './pages/health/health.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

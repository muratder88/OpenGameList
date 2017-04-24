import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import {FormsModule } from "@angular/forms";
import "rxjs/Rx";

import { AboutComponent } from "./about.component";
import { AppComponent } from "./components/app.component";
import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail.component";
import { ItemListComponent } from "./item-list.component";
import { LoginComponent } from "./login.component";
import{ PageNotFoundComponent } from "./page-not-found.component";
import { AppRouting } from "./app.routing";
import { ItemService } from "./item.service";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AboutComponent,
        AppComponent,
        HomeComponent,
        ItemListComponent,
        ItemDetailComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        HttpModule,
        FormsModule,
        RouterModule,
        AppRouting
    ],
    providers: [
        ItemService
    ]
})
export class AppModule {
}

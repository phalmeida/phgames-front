import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CabecalhoComponent} from './components/cabecalho/cabecalho.component';
import {RodapeComponent} from './components/rodape/rodape.component';
import {MenuComponent} from './components/menu/menu.component';
import {LayoutCompletoComponent} from './containers/layout-completo/layout-completo.component';

// Import routing module
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';

import {VersionsModule} from './versions/versions.module';
import {VersionsService} from "./versions/versions.service";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        CabecalhoComponent,
        RodapeComponent,
        MenuComponent,
        LayoutCompletoComponent,
        HomeComponent,
        CategoriesComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        VersionsModule
    ],
    providers: [
        VersionsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

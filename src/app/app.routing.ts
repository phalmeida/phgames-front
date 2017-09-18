import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";

export const APP_ROUTES: Routes = [
    {
        path:'',
        pathMatch: 'full',
        component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
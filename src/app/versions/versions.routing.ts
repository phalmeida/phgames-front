import { ModuleWithProviders }  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {VersionsComponent} from "./versions.component";

const APP_ROUTES: Routes =[
    {
        path: 'versions',
        component: VersionsComponent,
        data: {
            title: 'teste'
        }
    }
];

export const versionsRouting: ModuleWithProviders = RouterModule.forChild(APP_ROUTES);
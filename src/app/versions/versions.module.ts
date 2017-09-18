import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {VersionsComponent} from "./versions.component";
import {versionsRouting} from "./versions.routing";

@NgModule({
    imports: [
        CommonModule,
        versionsRouting
    ],
    declarations: [
        VersionsComponent
    ],
    exports: [
        VersionsComponent
    ]
})
export class VersionsModule {
}

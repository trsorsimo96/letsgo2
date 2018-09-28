import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LetsGoSharedModule } from 'app/shared';
import {
    ConfigFareComponent,
    ConfigFareDetailComponent,
    ConfigFareUpdateComponent,
    ConfigFareDeletePopupComponent,
    ConfigFareDeleteDialogComponent,
    configFareRoute,
    configFarePopupRoute
} from './';

const ENTITY_STATES = [...configFareRoute, ...configFarePopupRoute];

@NgModule({
    imports: [LetsGoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ConfigFareComponent,
        ConfigFareDetailComponent,
        ConfigFareUpdateComponent,
        ConfigFareDeleteDialogComponent,
        ConfigFareDeletePopupComponent
    ],
    entryComponents: [ConfigFareComponent, ConfigFareUpdateComponent, ConfigFareDeleteDialogComponent, ConfigFareDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LetsGoConfigFareModule {}

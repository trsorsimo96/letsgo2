import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LetsGoSharedModule } from 'app/shared';
import {
    TravelComponent,
    TravelDetailComponent,
    TravelUpdateComponent,
    TravelDeletePopupComponent,
    TravelDeleteDialogComponent,
    travelRoute,
    travelPopupRoute
} from './';

const ENTITY_STATES = [...travelRoute, ...travelPopupRoute];

@NgModule({
    imports: [LetsGoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [TravelComponent, TravelDetailComponent, TravelUpdateComponent, TravelDeleteDialogComponent, TravelDeletePopupComponent],
    entryComponents: [TravelComponent, TravelUpdateComponent, TravelDeleteDialogComponent, TravelDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LetsGoTravelModule {}

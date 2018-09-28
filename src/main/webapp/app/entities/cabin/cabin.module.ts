import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LetsGoSharedModule } from 'app/shared';
import {
    CabinComponent,
    CabinDetailComponent,
    CabinUpdateComponent,
    CabinDeletePopupComponent,
    CabinDeleteDialogComponent,
    cabinRoute,
    cabinPopupRoute
} from './';

const ENTITY_STATES = [...cabinRoute, ...cabinPopupRoute];

@NgModule({
    imports: [LetsGoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [CabinComponent, CabinDetailComponent, CabinUpdateComponent, CabinDeleteDialogComponent, CabinDeletePopupComponent],
    entryComponents: [CabinComponent, CabinUpdateComponent, CabinDeleteDialogComponent, CabinDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LetsGoCabinModule {}

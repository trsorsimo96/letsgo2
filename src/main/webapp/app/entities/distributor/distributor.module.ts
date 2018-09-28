import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LetsGoSharedModule } from 'app/shared';
import {
    DistributorComponent,
    DistributorDetailComponent,
    DistributorUpdateComponent,
    DistributorDeletePopupComponent,
    DistributorDeleteDialogComponent,
    distributorRoute,
    distributorPopupRoute
} from './';

const ENTITY_STATES = [...distributorRoute, ...distributorPopupRoute];

@NgModule({
    imports: [LetsGoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        DistributorComponent,
        DistributorDetailComponent,
        DistributorUpdateComponent,
        DistributorDeleteDialogComponent,
        DistributorDeletePopupComponent
    ],
    entryComponents: [DistributorComponent, DistributorUpdateComponent, DistributorDeleteDialogComponent, DistributorDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LetsGoDistributorModule {}

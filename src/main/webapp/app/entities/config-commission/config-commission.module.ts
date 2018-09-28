import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LetsGoSharedModule } from 'app/shared';
import {
    ConfigCommissionComponent,
    ConfigCommissionDetailComponent,
    ConfigCommissionUpdateComponent,
    ConfigCommissionDeletePopupComponent,
    ConfigCommissionDeleteDialogComponent,
    configCommissionRoute,
    configCommissionPopupRoute
} from './';

const ENTITY_STATES = [...configCommissionRoute, ...configCommissionPopupRoute];

@NgModule({
    imports: [LetsGoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ConfigCommissionComponent,
        ConfigCommissionDetailComponent,
        ConfigCommissionUpdateComponent,
        ConfigCommissionDeleteDialogComponent,
        ConfigCommissionDeletePopupComponent
    ],
    entryComponents: [
        ConfigCommissionComponent,
        ConfigCommissionUpdateComponent,
        ConfigCommissionDeleteDialogComponent,
        ConfigCommissionDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LetsGoConfigCommissionModule {}

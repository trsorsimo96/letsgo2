import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LetsGoSharedModule } from 'app/shared';
import {
    TownComponent,
    TownDetailComponent,
    TownUpdateComponent,
    TownDeletePopupComponent,
    TownDeleteDialogComponent,
    townRoute,
    townPopupRoute
} from './';

const ENTITY_STATES = [...townRoute, ...townPopupRoute];

@NgModule({
    imports: [LetsGoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [TownComponent, TownDetailComponent, TownUpdateComponent, TownDeleteDialogComponent, TownDeletePopupComponent],
    entryComponents: [TownComponent, TownUpdateComponent, TownDeleteDialogComponent, TownDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LetsGoTownModule {}

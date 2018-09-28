import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LetsGoPartnerModule } from './partner/partner.module';
import { LetsGoDistributorModule } from './distributor/distributor.module';
import { LetsGoTownModule } from './town/town.module';
import { LetsGoCompanyModule } from './company/company.module';
import { LetsGoRouteModule } from './route/route.module';
import { LetsGoResaModule } from './resa/resa.module';
import { LetsGoTravelModule } from './travel/travel.module';
import { LetsGoConfigFareModule } from './config-fare/config-fare.module';
import { LetsGoConfigCommissionModule } from './config-commission/config-commission.module';
import { LetsGoPlanningModule } from './planning/planning.module';
import { LetsGoCabinModule } from './cabin/cabin.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        LetsGoPartnerModule,
        LetsGoDistributorModule,
        LetsGoTownModule,
        LetsGoCompanyModule,
        LetsGoRouteModule,
        LetsGoResaModule,
        LetsGoTravelModule,
        LetsGoConfigFareModule,
        LetsGoConfigCommissionModule,
        LetsGoPlanningModule,
        LetsGoCabinModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LetsGoEntityModule {}

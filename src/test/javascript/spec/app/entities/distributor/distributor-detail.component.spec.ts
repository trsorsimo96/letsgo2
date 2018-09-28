/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { LetsGoTestModule } from '../../../test.module';
import { DistributorDetailComponent } from 'app/entities/distributor/distributor-detail.component';
import { Distributor } from 'app/shared/model/distributor.model';

describe('Component Tests', () => {
    describe('Distributor Management Detail Component', () => {
        let comp: DistributorDetailComponent;
        let fixture: ComponentFixture<DistributorDetailComponent>;
        const route = ({ data: of({ distributor: new Distributor(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [LetsGoTestModule],
                declarations: [DistributorDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(DistributorDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(DistributorDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.distributor).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});

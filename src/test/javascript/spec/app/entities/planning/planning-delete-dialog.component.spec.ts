/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { LetsGoTestModule } from '../../../test.module';
import { PlanningDeleteDialogComponent } from 'app/entities/planning/planning-delete-dialog.component';
import { PlanningService } from 'app/entities/planning/planning.service';

describe('Component Tests', () => {
    describe('Planning Management Delete Component', () => {
        let comp: PlanningDeleteDialogComponent;
        let fixture: ComponentFixture<PlanningDeleteDialogComponent>;
        let service: PlanningService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [LetsGoTestModule],
                declarations: [PlanningDeleteDialogComponent]
            })
                .overrideTemplate(PlanningDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(PlanningDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(PlanningService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});

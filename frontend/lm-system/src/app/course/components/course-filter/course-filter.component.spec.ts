import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseFilterComponent } from './course-filter.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseService } from '../../services/course.service';
import { MockCourseService } from 'src/app/testing/mock-course.service';
import { FilterType } from '../../enums/filter-type.enum';

describe('CourseFilterComponent', () => {
  let component: CourseFilterComponent;
  let fixture: ComponentFixture<CourseFilterComponent>;
  let service: CourseService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseFilterComponent],
      imports: [
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: CourseService, useClass: MockCourseService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseFilterComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CourseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should notify about filter changes', () => {
    const userServiceSpy = spyOn(service, 'setCourseFilter').and.callThrough();
    triggerFilters();
    expect(userServiceSpy).toHaveBeenCalledTimes(2);
  });

  it('should notify about appropriate changes', () => {
    const userServiceSpy = spyOn(service, 'setCourseFilter').and.callThrough();
    triggerFilters();
    expect(userServiceSpy).toHaveBeenCalledWith({ phrase: 'test', searchBy: FilterType.Name });
  });

  it('should be possible to clear type filter', () => {
    component.clear();
    expect(component.filterTypeControl.value).toBeNull();
  });

  function triggerFilters(): void {
    component.searchControl.setValue('test');
    component.filterTypeControl.setValue(FilterType.Name);
  }
});

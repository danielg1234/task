import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CourseFilterComponent } from '../course-filter/course-filter.component';
import { CourseTableComponent } from '../course-table/course-table.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { MockCourseService } from 'src/app/testing/mock-course.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { COURSES } from 'src/app/testing/courses';
import { take } from 'rxjs/operators';
import { FilterType } from '../../enums/filter-type.enum';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let service: CourseService;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent, CourseFilterComponent, CourseTableComponent],
      imports: [BrowserAnimationsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                courses: COURSES,
              },
            },
          },
        },
        { provide: CourseService, useClass: MockCourseService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    service = TestBed.get(CourseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return all courses for unset filters', () => {
    checkCoursesLength(COURSES.length);
  });

  it('should filter courses by status', () => {
    service.setCourseFilter({ searchBy: FilterType.Status, phrase: 'draft' });
    checkCoursesLength(2);
  });

  it('should filter courses by name', () => {
    service.setCourseFilter({ searchBy: FilterType.Status, phrase: 'course 1' });
    checkCoursesLength(1);
  });

  it('should filter courses by instructor', () => {
    service.setCourseFilter({ searchBy: FilterType.Instructor, phrase: 'Lech' });
    checkCoursesLength(1);
  });

  it('should filter courses by name, instructor or status', () => {
    service.setCourseFilter({ searchBy: null, phrase: 'lech' });
    checkCoursesLength(1);
  });

  function checkCoursesLength(length: number): void {
    component.filteredCourses$.pipe(take(1)).subscribe((courses) => {
      expect(courses.length === length);
    });
  }
});

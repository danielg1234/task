import { BehaviorSubject, Observable, of } from 'rxjs';
import { CourseFilter, CourseDetails, Course } from '../course/models';
import { COURSES } from './courses';
import { COURSE } from './course';

export class MockCourseService {
  private courseFilterSubject = new BehaviorSubject<CourseFilter>({ phrase: '', searchBy: null });
  courseFilter$ = this.courseFilterSubject.asObservable();
  constructor() {}

  getCourse(id: number): Observable<CourseDetails> {
    return of(COURSE);
  }
  getCourses(): Observable<Course[]> {
    return of(COURSES);
  }

  setCourseFilter(filter: CourseFilter): void {
    this.courseFilterSubject.next(filter);
  }
}

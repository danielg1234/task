import { Injectable } from '@angular/core';
import { Course, CourseFilter, CourseDetails } from '../models';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courseFilterSubject = new BehaviorSubject<CourseFilter>({ phrase: '', searchBy: null });
  courseFilter$ = this.courseFilterSubject.asObservable();
  constructor(private httpClient: HttpClient) {}

  getCourse(id: number): Observable<CourseDetails> {
    return this.httpClient.get<CourseDetails>(`${environment.API}/course/${id}`);
  }
  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${environment.API}/course`);
  }

  setCourseFilter(filter: CourseFilter): void {
    this.courseFilterSubject.next(filter);
  }
}

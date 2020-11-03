import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Course } from '../models';
import { CourseService } from '../services/course.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseListResolver implements Resolve<Course[]> {
  constructor(private courseService: CourseService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Course[]> {
    return this.courseService.getCourses();
  }
}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Observable } from 'rxjs';
import { CourseDetails } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CourseDetailsResolver implements Resolve<CourseDetails> {
  constructor(private courseService: CourseService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CourseDetails> {
    return this.courseService.getCourse(route.params.id);
  }
}

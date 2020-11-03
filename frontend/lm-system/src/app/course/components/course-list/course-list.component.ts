import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterType } from '../../enums/filter-type.enum';

@Component({
  selector: 'lms-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  filteredCourses$: Observable<Course[]>;
  courses: Course[];
  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.route.snapshot.data.courses;
    this.initializeFilteredCourses();
  }

  private initializeFilteredCourses(): void {
    this.filteredCourses$ = this.courseService.courseFilter$.pipe(
      map((filter) => {
        const phrase = filter.phrase.toLowerCase();
        const searchBy = filter.searchBy;
        if (!searchBy) {
          return this.courses.filter((course) => {
            return (
              course.name.toLowerCase().includes(phrase) ||
              course.status.toLowerCase().includes(phrase) ||
              course.instructors.some((instructor) => instructor.name.toLowerCase().includes(phrase))
            );
          });
        } else if (searchBy) {
          switch (searchBy) {
            case FilterType.Status:
              return this.courses.filter((course) => course.status.toLowerCase().includes(phrase));
            case FilterType.Name:
              return this.courses.filter((course) => course.name.toLowerCase().includes(phrase));
            case FilterType.Instructor:
              return phrase
                ? this.courses.filter((course) =>
                    course.instructors.some((instructor) => instructor.name.toLowerCase().includes(phrase))
                  )
                : this.courses;
          }
        } else {
          return this.courses;
        }
      })
    );
  }
}

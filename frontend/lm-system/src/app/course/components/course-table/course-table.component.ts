import { Component, Input } from '@angular/core';
import { Course } from '../../models';

@Component({
  selector: 'lms-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.scss'],
})
export class CourseTableComponent {
  headers = ['ID', 'Image', 'Name', 'Status'];
  instructorsName = 'Instructors';
  @Input() courses: Course[];
  constructor() {}
}

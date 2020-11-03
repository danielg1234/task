import { Component, OnInit } from '@angular/core';
import { CourseDetails, Instructor } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'lms-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit {
  course: CourseDetails;
  courseForm: FormGroup;

  get selectedInstructors(): Instructor[] {
    return this.courseForm.get('instructors').value;
  }
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.course = this.route.snapshot.data.course;
    this.initForm();
  }

  private initForm(): void {
    this.courseForm = this.formBuilder.group({
      name: [{ value: this.course.name, disabled: true }],
      status: [{ value: this.course.status, disabled: true }],
      instructors: [{ value: this.course.instructors, disabled: true }],
    });
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'lms-course-gallery',
  templateUrl: './course-gallery.component.html',
  styleUrls: ['./course-gallery.component.scss'],
})
export class CourseGalleryComponent {
  imageIndex = 0;
  @Input() images: string[] = [];

  changeImageIndex(value: number): void {
    this.imageIndex = this.imageIndex + value;
  }
}

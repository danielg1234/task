import { NgModule } from '@angular/core';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CourseListResolver } from './resolvers/course-list.resolver';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseFilterComponent } from './components/course-filter/course-filter.component';
import { CourseDetailsResolver } from './resolvers/course-details.resolver';
import { CourseGalleryComponent } from './components/course-gallery/course-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: CourseListComponent,
    resolve: { courses: CourseListResolver },
  },
  {
    path: ':id',
    component: CourseDetailsComponent,
    resolve: { course: CourseDetailsResolver },
  },
];

@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailsComponent,
    CourseTableComponent,
    CourseFilterComponent,
    CourseGalleryComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class CourseModule {}

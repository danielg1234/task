import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then((m) => m.CourseModule),
  },
  { path: '', redirectTo: 'course', pathMatch: 'full' },
  { path: '**', redirectTo: 'course' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

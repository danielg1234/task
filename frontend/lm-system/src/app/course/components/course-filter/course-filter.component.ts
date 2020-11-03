import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterType } from '../../enums/filter-type.enum';
import { combineLatest, Subscription } from 'rxjs';
import { CourseService } from '../../services/course.service';
@Component({
  selector: 'lms-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.scss'],
})
export class CourseFilterComponent implements OnInit, OnDestroy {
  filterTypes = FilterType;
  filterTypesList: number[];
  filterTypeControl = new FormControl();
  searchControl = new FormControl();
  private controlsSubscription: Subscription;
  constructor(private courseService: CourseService) {}

  clear(): void {
    this.filterTypeControl.setValue(null);
  }
  ngOnDestroy(): void {
    if (this.controlsSubscription) {
      this.controlsSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.getFilterList();
    this.initControlsSubscription();
    this.setInitialValues();
  }

  private getFilterList(): void {
    this.filterTypesList = Object.keys(this.filterTypes)
      .filter((value) => {
        const numberValue = Number(value);
        return numberValue;
      })
      .map((value) => {
        return +value;
      });
  }
  private initControlsSubscription(): void {
    this.controlsSubscription = combineLatest([
      this.filterTypeControl.valueChanges,
      this.searchControl.valueChanges,
    ]).subscribe((value) => {
      this.courseService.setCourseFilter({ searchBy: value[0], phrase: value[1] });
    });
  }

  private setInitialValues(): void {
    this.filterTypeControl.setValue(null);
    this.searchControl.setValue('');
  }
}

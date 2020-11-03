import { FilterType } from '../enums/filter-type.enum';

export interface CourseFilter {
  searchBy: FilterType | null;
  phrase: string;
}

import { Instructor } from '.';

export interface CourseDetails {
  id: number;
  name: string;
  images: string[];
  status: string;
  instructors: Instructor[];
}

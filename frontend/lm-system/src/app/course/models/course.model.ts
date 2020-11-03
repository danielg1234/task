import { Instructor } from '.';

export interface Course {
  id: number;
  name: string;
  imageUrl: string;
  status: string;
  instructors: Instructor[];
}

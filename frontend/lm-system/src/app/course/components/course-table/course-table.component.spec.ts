import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { Location } from '@angular/common';
import { CourseTableComponent } from './course-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkDirectiveStub, DummyComponent } from 'src/app/testing';

describe('CourseTableComponent', () => {
  let component: CourseTableComponent;
  let fixture: ComponentFixture<CourseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseTableComponent, RouterLinkDirectiveStub],
      imports: [RouterTestingModule.withRoutes([{ path: 'course/:id', component: DummyComponent }])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTableComponent);
    component = fixture.componentInstance;
    component.courses = [
      { name: 'Course 1', imageUrl: '', id: 1, status: 'Draft', instructors: [] },
      { name: 'Course 2', imageUrl: '', id: 2, status: 'Draft', instructors: [{ name: 'Roman', image: '' }] },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display instructor row', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('tr').querySelector('div')).toBeNull();
  });

  it('should display instructor row', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('tr')[1].querySelector('div')).not.toBeNull();
  });

  it('should go to specific url', async(
    inject([Location], (location: Location) => {
      const compiled = fixture.debugElement.nativeElement;
      compiled.querySelector('h3').click();
      fixture.whenStable().then(() => {
        console.log(location.path());
        expect(location.path()).toEqual('/course/1');
      });
    })
  ));
});

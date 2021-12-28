import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormArray, FormGroup, FormControl, FormBuilder  } from "@angular/forms";
import { ClassRoom } from "../model/classRoom.model";
import { ClassRoomRepository } from "../model/classRoom.repository";
import { TeacherRepository } from "../model/teacher.repository";
import { TimeTable } from "../model/timeTable.model";
import { Teacher } from "../model/teacher.model";

@Component({
  templateUrl: "classRoomTableEditor.component.html",
  styleUrls: ["classRoomTableEditor.component.css"]
})
export class ClassRoomTableEditorComponent { //implements OnInit {

  classForm: FormGroup;


  editing: boolean = false;
  hasPressedAddDay = false;
  classRoom: ClassRoom = new ClassRoom(new TimeTable());;

  constructor(private fb: FormBuilder, private repository: ClassRoomRepository, private teacherRepo: TeacherRepository, private router: Router, private activeRoute: ActivatedRoute) {

    this.classForm = this.fb.group({
      subject: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      startTime: new FormControl(''),
      minNumberOfStudents: new FormControl(0),
      maxNumberOfStudents: new FormControl(0),
      endTime: new FormControl(''),
      days: this.fb.array([
        this.fb.control('')
      ]),
      teacher:[null]

    });

    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(this.classRoom, this.repository.getClassRoom(activeRoute.snapshot.params["id"]));
      this.classForm.get('subject').setValue(this.classRoom.subject);
      this.classForm.get('category').setValue(this.classRoom.category);
      this.classForm.get('description').setValue(this.classRoom.description);
      this.classForm.get('startDate').setValue(this.classRoom.timeTable.startDate);
      this.classForm.get('endDate').setValue(this.classRoom.timeTable.endDate);
      this.classForm.get('startTime').setValue(this.classRoom.timeTable.startTime);
      this.classForm.get('endTime').setValue(this.classRoom.timeTable.endTime);
      this.classForm.get('minNumberOfStudents').setValue(this.classRoom.minNumberStudents);
      this.classForm.get('maxNumberOfStudents').setValue(this.classRoom.maxNumberStudents);
      this.classForm.get('teacher').patchValue(this.classRoom.teacher);



      for (const day of this.repository.getClassRoom(activeRoute.snapshot.params["id"]).timeTable.numberOfDaysAWeek) {
        this.days.push(new FormControl(day));
      }
    }
  }


  addDays() {
    this.hasPressedAddDay = true;
    this.days.push(this.fb.control(''));
  }

  get days(){
    return this.classForm.get('days') as FormArray;
  }


removeDays(index: number) {
  this.days.removeAt(index);
}

get getAllTeachers():Teacher[] {
  return this.teacherRepo.getTeachers();
}


  onSubmit(){
    if (!this.hasPressedAddDay) {
      this.classRoom.timeTable.numberOfDaysAWeek  = new Array<string>();
      for (const day of this.days.controls) {
        this.classRoom.timeTable.numberOfDaysAWeek.push(day.value);
      }


      console.log("Teacher from form"+this.classForm.get('teacher').value);
      console.log("Teacher from form"+this.teacherRepo.getTeacher(this.classForm.get('teacher').value));

      this.classRoom.teacher = this.teacherRepo.getTeacher(this.classForm.get('teacher').value);
      this.classRoom.subject = this.classForm.get('subject').value;
      this.classRoom.category = this.classForm.get('category').value;
      this.classRoom.description = this.classForm.get('description').value;
      this.classRoom.minNumberStudents = this.classForm.get('minNumberOfStudents').value;
      this.classRoom.maxNumberStudents = this.classForm.get('maxNumberOfStudents').value;
      this.classRoom.timeTable.startDate =this.classForm.get('startDate').value;
      this.classRoom.timeTable.endDate = this.classForm.get('endDate').value
      this.classRoom.timeTable.startTime = this.classForm.get('startTime').value;
      this.classRoom.timeTable.endTime = this.classForm.get('endTime').value;

      this.repository.saveClassRoom(this.classRoom);
      console.log(JSON.stringify(this.classRoom));
      this.router.navigateByUrl("/admin/main/classRooms");

  } else {
    this.hasPressedAddDay = false;
  }

  }



  /*
  classRoom: ClassRoom = new ClassRoom(new TimeTable());
  selectedTeacher: Teacher;

  //TODO: whenever addDays button is click save method is also called and thefore navigate back to previous page. Need to fix
  // but cause is currently unclear.
  days=new FormArray([]);


  ngOnInit(): void {

  }


  removeDays(index: number) {
    this.days.removeAt(index);
  }

  save() {
    if(!this.hasPressedAddDay) {

      this.classRoom.timeTable.numberOfDaysAWeek  = new Array<string>();
      for (const day of this.days.controls) {
        this.classRoom.timeTable.numberOfDaysAWeek.push(day.value);
      }

      this.classRoom.teacher = this.selectedTeacher;

      this.repository.saveClassRoom(this.classRoom);
      this.router.navigateByUrl("/admin/main/classRooms");
    }
    this.hasPressedAddDay = false;
  }


  selectTeacher(teacher: Teacher){
    this.selectedTeacher = teacher;
    console.log(teacher.name);
  }*/
 }

import { Injectable } from "@angular/core";
import { Teacher } from "./teacher.model";
//import { StaticDataSource} from "./static.datasource";
import { RestDataSource} from "./rest.datasource";
import { HelperService } from "./helper.service";

@Injectable()
export class TeacherRepository {
  private teachers: Teacher[] = [];

  constructor(private dataSource: RestDataSource, private helperService: HelperService) {
     /* if admin then load data as per pagination counts (for example login user is admin) otherwise only
       load for this student
    */
   if (helperService.getSignInMode() === "teacher"){
      dataSource.getTeacherByName(this.helperService.getSignedInUser()).subscribe(data => {
      this.teachers.push(data);
      });
    } else {
      dataSource.getTeachers().subscribe(data => {
        this.teachers = data;
        });
    }
  }

  getTeacher(id: string): Teacher {
    return this.teachers.find(t => t._id == id);
  }

  getTeachers():Teacher[]{
    return this.teachers;
  }

  getTeacherByName(name: string): Teacher {
    let teacher: Teacher;
    teacher = this.teachers.find(t => t.name == name);
    if (!teacher){
      this.dataSource.getTeacherByName(this.helperService.getSignedInUser()).subscribe(data => {
        this.teachers.push(data);
        });
      teacher = this.teachers.find(t => t.name == name);
    }
    return teacher;
  }

  saveTeacher(teacher: Teacher) {
    if (!teacher._id) {
      this.dataSource.saveTeacher(teacher).subscribe(t => this.teachers.push(t));
    }
  }


 }

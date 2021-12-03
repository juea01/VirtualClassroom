import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute} from "@angular/router";
import { Student } from "../model/student.model";
import { StudentRepository } from "../model/student.repository";
import { Teacher } from "../model/teacher.model";
import { TeacherRepository } from "../model/teacher.repository";

@Component({
  templateUrl: "registration.component.html"
})
export class RegistrationComponent {
  public username: string;
 // public qualifications: Array<string>;
  public qualifications: string;
  public grade: string;
  public email: string;
  public phone: string;
  public password: string;
  public errorMessage: string;
  public isStudentRoute: boolean = false;

  student: Student = new Student();
  teacher: Teacher = new Teacher();

  constructor(private router: Router, activeRoute: ActivatedRoute, private repository: StudentRepository, private teacherRepository: TeacherRepository) {
    this.isStudentRoute = activeRoute.snapshot.params["mode"] == "student";
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      if (this.isStudentRoute) {
        this.student.name = this.username;
        this.student.grade = this.grade;
        this.student.email = this.email;
        this.student.phone = this.phone;
        this.repository.saveStudent(this.student);
      } else {
        this.teacher.name = this.username;
        this.teacher.qualification = new Array(this.qualifications);
        this.teacher.email = this.email;
        this.teacher.phone = this.phone;

        this.teacherRepository.saveTeacher(this.teacher);
      }

      this.router.navigateByUrl("/signin/success",);
    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }

}

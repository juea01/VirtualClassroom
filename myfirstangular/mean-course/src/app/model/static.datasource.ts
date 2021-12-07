import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { Observable, from} from "rxjs";

@Injectable()
export class StaticDataSource {

  private students: Student[] = [
    new Student("1", "Cacey", "grade9","cacey@yahoo.com","+64210584190"),
    new Student("1", "John", "grade9","john@yahoo.com","+64210584188")
  ];

  getStudents(): Observable<Student[]>{
    return from ([this.students]);
  }

}

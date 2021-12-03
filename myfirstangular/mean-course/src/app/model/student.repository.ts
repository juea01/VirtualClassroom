import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { StudentClassRoom } from "./studentClassRoom.model";
//import { StaticDataSource} from "./static.datasource";
import { RestDataSource} from "./rest.datasource";
import { HelperService } from "./helper.service";

@Injectable()
export class StudentRepository {
  private students: Student[] = [];
  private studentClassRooms: StudentClassRoom[] = [];

  constructor(private dataSource: RestDataSource, private helperService: HelperService) {

    /* if admin then load data as per pagination counts (for example login user is admin) otherwise only
       load for this student
    */
   if (helperService.getSignInMode() === "student"){
    this.dataSource.getStudentByUserName(this.helperService.getSignedInUser()).subscribe(data=>{
        this.students.push(data);
      });

      dataSource.getStudentClassRooms().subscribe(data => {
        this.studentClassRooms = data;
      })
   } else {
    dataSource.getStudents().subscribe(data => {
      this.students = data;
      });

      dataSource.getStudentClassRooms().subscribe(data => {
        this.studentClassRooms = data;
      })
   }

  }

  getStudent(id: number): Student {
    return this.students.find(s => s.id == id);
  }

  getStudentByUserName(name: string): Student {
    let student: Student;
    student = this.students.find(s => s.name == name);
    if (!student){
      this.dataSource.getStudentByUserName(name).subscribe(data=>{
        this.students.push(data);
      });
      student = this.students.find(s => s.name == name);
    }
    return student;
  }

  saveStudent(student: Student) {
    if (student.id == null || student.id == 0) {
      this.dataSource.saveStudent(student).subscribe(s => this.students.push(s));
    }
  }

  requestToJoin(studentClassRoom: StudentClassRoom) {
    if ((studentClassRoom.classRoomId !== null && studentClassRoom.classRoomId !== 0) && (studentClassRoom.studentId !== null
      && studentClassRoom.studentId !== 0)) {
        console.log("Saving students");
        this.dataSource.saveStudentClassRoom(studentClassRoom).subscribe( stCl => this.studentClassRooms.push(stCl));
      } else {
        console.log("Can't Save students");
      }
  }


  updateStudentClassRoom(studentClassRoom: StudentClassRoom) {
    this.dataSource.updateStudentClassRoom(studentClassRoom).subscribe(sc => {this.studentClassRooms.splice(this.studentClassRooms.findIndex(sc => sc.id == studentClassRoom.id),1,studentClassRoom )
    });
  }

  getStudentClassRoomByStudentClassRoomId(studentId: number, classId: number):StudentClassRoom {
    return this.studentClassRooms.find(
      sc => (sc.studentId === studentId && sc.classRoomId === classId) );
  }

  getStudentClassRoomByStudentId(studentId: number):StudentClassRoom {
    return this.studentClassRooms.find(
      sc => (sc.studentId === studentId) );
  }

  getStudentClassRoomById(studentClassRoomId: number):StudentClassRoom {
    return this.studentClassRooms.find(
      sc => (sc.id === studentClassRoomId) );
  }


  getStudentClassRooms():StudentClassRoom[] {
    return this.studentClassRooms;
  }




 }

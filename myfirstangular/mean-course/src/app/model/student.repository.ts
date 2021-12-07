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
   } else {
    dataSource.getStudents().subscribe(data => {
      this.students = data;
      });
   }


   dataSource.getStudentClassRooms().subscribe(data => {
    this.studentClassRooms = data;
  })

  }

  getStudent(id: string): Student {
    return this.students.find(s => s._id == id);
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
    if (!student._id) {
      this.dataSource.saveStudent(student).subscribe(s => this.students.push(s));
    }
  }

  requestToJoin(studentClassRoom: StudentClassRoom) {
    if ((studentClassRoom.classroom._id) && (studentClassRoom.student._id)) {
        this.dataSource.saveStudentClassRoom(studentClassRoom).subscribe( stCl =>
          {
            this.studentClassRooms.push(stCl);
        });
      }
  }


  updateStudentClassRoom(studentClassRoom: StudentClassRoom) {
    this.dataSource.updateStudentClassRoom(studentClassRoom).subscribe(sc => {this.studentClassRooms.splice(this.studentClassRooms.findIndex(sc => sc._id == studentClassRoom._id),1,studentClassRoom )
    });
  }

  getStudentClassRoomByStudentClassRoomId(studentId: string, classId: string):StudentClassRoom {
    return this.studentClassRooms.find(
      sc => (sc.student._id === studentId && sc.classroom._id  === classId) );
  }

  getStudentClassRoomByStudentId(studentId: string):StudentClassRoom {
    return this.studentClassRooms.find(
      sc => (sc.student._id === studentId) );
  }

  getStudentClassRoomById(studentClassRoomId: string):StudentClassRoom {
    return this.studentClassRooms.find(
      sc => (sc._id === studentClassRoomId) );
  }


  getStudentClassRooms():StudentClassRoom[] {
    return this.studentClassRooms;
  }




 }

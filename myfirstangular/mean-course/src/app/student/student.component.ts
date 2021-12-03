import {Component} from "@angular/core";
import { Student } from "../model/student.model";
import { ClassRoom } from "../model/classRoom.model";
import { StudentRepository } from "../model/student.repository";
import { ClassRoomRepository } from "../model/classRoom.repository";
import { HelperService } from "../model/helper.service";
import { StudentClassRoom } from "../model/studentClassRoom.model";

@Component({
  selector: 'app-studentSubject',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class SubjectComponent {
  public classPerPage = 4;
  public selectedPage = 1;
  private date = new Date();

  studentClassRoom: StudentClassRoom;

  constructor(private repository: StudentRepository, private helperService: HelperService, private classRepository: ClassRoomRepository) {}

  get student(): Student {
    return this.repository.getStudentByUserName(this.helperService.getSignedInUser());
  }

  getClassRooms(): ClassRoom[] {
    let pageIndex = (this.selectedPage -1) * this.classPerPage;
    //return this.classRepository.getClassRooms().slice(pageIndex, pageIndex + this.classPerPage);
    return this.classRepository.getClassRooms();
  }

  getLiveClassRooms(): ClassRoom[] {
    //return this.classRepository.getClassRooms().slice(pageIndex, pageIndex + this.classPerPage);

    //check if admin has approved or not for this student from student classes repo
    let registeredClasses = this.repository.getStudentClassRooms().map(sc => {
      if (sc.studentId === this.student.id && sc.adminDecision === this.helperService.getAcceptAdminState())
      {return sc.classRoomId};
    })


    //get the classes from class room repo and fliter out the classes that are live now
    let classRooms: ClassRoom[];
    classRooms = this.classRepository.getClassRooms().map(cla =>
      {if (registeredClasses.includes(cla.id)) {
        //check time
        if (Date.parse(cla.timeTable.startDate) <= this.date.getTime() && Date.parse(cla.timeTable.endDate) >= this.date.getTime() ) {

              let today = false;
              cla.timeTable.numberOfDaysAWeek.forEach(day => {
                if(this.date.getDay() == this.helperService.getDay(day)) {
                  today = true;
                }
              })


          if(today) {

            let startHour = cla.timeTable.startTime.split(':');
            let endHour = cla.timeTable.endTime.split(':');

            let tempStartTime = new Date();
            tempStartTime.setHours(  Number(startHour[0]), Number(startHour[1] ?? 0) );

            let tempEndTime = new Date();
            tempEndTime.setHours(  Number(endHour[0]), Number(endHour[1] ?? 0) );



            if(tempStartTime <= this.date && tempEndTime >= this.date) {
             return cla;
            }
          }


        }


    };
    });
    return classRooms;
  }

  requestToJoinSession(stId: number, classId: number) {
    this.studentClassRoom = new StudentClassRoom();
    this.studentClassRoom.studentId = stId;
    this.studentClassRoom.classRoomId = classId;
    this.studentClassRoom.adminDecision = this.helperService.getDefaultAdminState();
    this.repository.requestToJoin(this.studentClassRoom);
  }

  getRegisteredInfo(studentId: number, classId: number): string {
    this.studentClassRoom = this.repository.getStudentClassRoomByStudentClassRoomId(studentId,classId);
    if( this.studentClassRoom !== undefined) {
      return this.studentClassRoom.adminDecision;
    }
    return "not-registered";
  }

  progressBarValue = 90;
}

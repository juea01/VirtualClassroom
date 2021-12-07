import {Component} from "@angular/core";
import { Student } from "../model/student.model";
import { ClassRoom } from "../model/classRoom.model";
import { TeacherRepository } from "../model/teacher.repository";
import { ClassRoomRepository } from "../model/classRoom.repository";
import { HelperService } from "../model/helper.service";
import { StudentClassRoom } from "../model/studentClassRoom.model";
import { Teacher } from "../model/teacher.model";

@Component({
  selector: 'app-teacherSubject',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  public classPerPage = 4;
  public selectedPage = 1;
  private date = new Date();

  constructor(private repository: TeacherRepository, private helperService: HelperService, private classRepository: ClassRoomRepository) {}

  get teacher(): Teacher {
    return this.repository.getTeacherByName(this.helperService.getSignedInUser());
  }

  getClassRooms(): ClassRoom[] {
    let pageIndex = (this.selectedPage -1) * this.classPerPage;
    // //return this.classRepository.getClassRooms().slice(pageIndex, pageIndex + this.classPerPage);
    let classRooms: ClassRoom[];
    classRooms = this.classRepository.getClassRooms().map(
      cla => {
              if (cla.teacher.name === this.helperService.getSignedInUser()) {
                return cla;
              }
        }
    )


    return classRooms;
  }

  getLiveClassRooms(): ClassRoom[] {
    //return this.classRepository.getClassRooms().slice(pageIndex, pageIndex + this.classPerPage);
    //get the classes from class room repo and fliter out the classes that are live now
    let classRooms: ClassRoom[];
    classRooms = this.getClassRooms().map(cla =>
      {
        //check time
        if (cla && Date.parse(cla.timeTable.startDate) <= this.date.getTime() && Date.parse(cla.timeTable.endDate) >= this.date.getTime() ) {

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
    });
    return classRooms;
  }




  progressBarValue = 90;
}

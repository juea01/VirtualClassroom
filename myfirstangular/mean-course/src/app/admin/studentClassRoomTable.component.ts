import { Component } from "@angular/core";
import { StudentClassRoom } from "../model/studentClassRoom.model";
import { StudentRepository } from "../model/student.repository";
import { HelperService } from "../model/helper.service";

@Component({
  templateUrl: "studentClassRoomTable.component.html",
  styleUrls: ["studentClassRoomTable.component.css"]
})
export class StudentClassRoomTableComponent {
  studentClassRoom: StudentClassRoom;

  constructor(private repository: StudentRepository, private helper: HelperService) {}

  getStudentClassRooms(): StudentClassRoom[] {
    return this.repository.getStudentClassRooms();
  }

  // //more methods such as delete etc..
  // deleteClassRoom(id: number) {
  //   this.repository.deleteClassRoom(id);
  // }

  accept(id: string) {
    this.studentClassRoom = this.repository.getStudentClassRoomById(id);
    this.studentClassRoom.adminDecision = this.helper.getAcceptAdminState();
    this.repository.updateStudentClassRoom(this.studentClassRoom);
  }

  reject(id: string) {
    this.studentClassRoom = this.repository.getStudentClassRoomById(id);
    this.studentClassRoom.adminDecision = this.helper.getRejectAdminState();
    this.repository.updateStudentClassRoom(this.studentClassRoom);
  }


}

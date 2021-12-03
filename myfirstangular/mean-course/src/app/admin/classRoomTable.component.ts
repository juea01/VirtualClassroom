import { Component } from "@angular/core";
import { ClassRoom } from "../model/classroom.model";
import { ClassRoomRepository } from "../model/classRoom.repository";

@Component({
  templateUrl: "classRoomTable.component.html",
  styleUrls: ["classRoomTable.component.css"]
})
export class ClassRoomTableComponent {

  constructor(private repository: ClassRoomRepository) {}

  getClassRooms(): ClassRoom[] {
    return this.repository.getClassRooms();
  }

  //more methods such as delete etc..
  deleteClassRoom(id: number) {
    this.repository.deleteClassRoom(id);
  }
}

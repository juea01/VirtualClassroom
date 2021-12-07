import { Injectable } from "@angular/core";
import { ClassRoom } from "./classRoom.model";
import { RestDataSource } from "./rest.datasource";
import { StudentClassRoom } from "./studentClassRoom.model";
import { Message } from "./message.model";
import { Teacher } from "./teacher.model";

@Injectable()
export class ClassRoomRepository {
  private classRooms: ClassRoom[] = [];
  private messages: Message[] = [];

  constructor(private dataSource: RestDataSource){
    dataSource.getClassRooms().subscribe( data => {
      this.classRooms = data;
    });
  }

  getUpdatedMessage() {
    return this.dataSource.incomingMessage;
  }


  addMessage(message:Message) {
    this.messages.push(message);
  }

  getMessages(): Message[] {
    return this.messages;
  }

  getClassRooms():ClassRoom[] {
    return this.classRooms;
  }

  getClassRoom(id: string): ClassRoom {
    return this.classRooms.find( c => c._id == id);
  }

  saveClassRoom(classRoom: ClassRoom) {
    //console.log("remote server call"+ this.dataSource.authenticateRemote());
    if (!classRoom._id) {
      this.dataSource.saveClassRoom(classRoom)
        .subscribe(c => this.classRooms.push(c));
    } else {
      this.dataSource.updateClassRoom(classRoom)
        .subscribe(c => {this.classRooms.splice(this.classRooms.findIndex(c => c._id == classRoom._id),1,classRoom);
    });
  }
 }

  //here delete function and other more functions
  deleteClassRoom(id: string) {
    this.dataSource.deleteClassRoom(id).subscribe(c => {
      this.classRooms.splice(this.classRooms.
        findIndex(c => c._id == id),1);
    })
  }

  getMessageLength(): number {
    return this.messages.length;
  }


}

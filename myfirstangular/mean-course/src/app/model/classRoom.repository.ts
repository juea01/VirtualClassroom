import { Injectable } from "@angular/core";
import { ClassRoom } from "./classRoom.model";
import { ClassRoomRemote } from "./classRoomRemote.model";
import { RestDataSource } from "./rest.datasource";
import { StudentClassRoom } from "./studentClassRoom.model";
import { Message } from "./message.model";

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

  getClassRoom(id: number): ClassRoom {
    return this.classRooms.find( c => c.id == id);
  }

  saveClassRoom(classRoom: ClassRoom) {
    //console.log("remote server call"+ this.dataSource.authenticateRemote());
    if (classRoom.id == null || classRoom.id == 0) {
      this.dataSource.saveClassRoom(classRoom)
        .subscribe(c => this.classRooms.push(c));
    } else {
      this.dataSource.updateClassRoom(classRoom)
        .subscribe(c => {this.classRooms.splice(this.classRooms.findIndex(c => c.id == classRoom.id),1,classRoom);
    });
  }
 }

  //here delete function and other more functions
  deleteClassRoom(id: number) {
    this.dataSource.deleteClassRoom(id).subscribe(c => {
      this.classRooms.splice(this.classRooms.
        findIndex(c => c.id == id),1);
    })
  }

  getMessageLength(): number {
    return this.messages.length;
  }


}

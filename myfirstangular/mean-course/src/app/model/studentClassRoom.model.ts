import { ClassRoom } from "./classRoom.model";
import { Student } from "./student.model";

export class StudentClassRoom {
  constructor(public _id?: string, public classroom?: ClassRoom, public student?: Student, public adminDecision?: string){}
}

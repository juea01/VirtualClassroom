import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Student } from "./student.model";
import { StudentClassRoom } from "./studentClassRoom.model";
import { HttpHeaders } from "@angular/common/http";
import { Teacher } from "./teacher.model";
import { ClassRoom } from "./classRoom.model";
//import { ClassRoomRemote } from "./classRoomRemote.model";
import { map } from "rxjs/operators";
import {Socket} from "ngx-socket-io";
import { Message } from "./message.model";


const PROTOCOL = "http";
//const PORT = 3500;
const PORT = 5000;
@Injectable()
export class RestDataSource {


 baseUrl: string;
 thirdPartyUrl = 'https://app.learncube.com/api/virtual-classroom/';

 auth_token: string;
 auth_token_remote: string;

 constructor(private http: HttpClient, private socket: Socket) {
   this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
 }

 //socket io messages
 incomingMessage = this.socket.fromEvent<Message>('messages');


 getStudents(): Observable<Student[]> {
   return this.http.get<Student[]>(this.baseUrl + "students");
 }

  saveStudent(student: Student): Observable<Student> {
   return this.http.post<Student>(this.baseUrl + "students", student);
  }

  getStudentClassRooms(): Observable<StudentClassRoom[]> {
    return this.http.get<StudentClassRoom[]>(this.baseUrl + "studentClassRooms");
  }

  getStudentByUserName(name: string): Observable<Student>{
    return this.http.get<Student>(this.baseUrl + `students/${name}`);
  }

  saveStudentClassRoom(studentClassRoom: StudentClassRoom): Observable<StudentClassRoom> {
    return this.http.post<StudentClassRoom>(this.baseUrl + "studentClassRooms", studentClassRoom);
  }


  updateStudentClassRoom(studentClassRoom: StudentClassRoom): Observable<StudentClassRoom> {
    return this.http.put<StudentClassRoom>(`${this.baseUrl}studentClassRooms/${studentClassRoom._id}`, studentClassRoom, this.getOptions());
  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.baseUrl + "teachers");
  }

  getTeacherByName(name: string): Observable<Teacher> {
    return this.http.get<Teacher>(this.baseUrl + `teachers/${name}`);
  }

  saveTeacher(teacher: Teacher): Observable<Student> {
    return this.http.post<Teacher>(this.baseUrl + "teachers", teacher);
   }

   getClassRooms(): Observable<ClassRoom[]> {
     return this.http.get<ClassRoom[]>(this.baseUrl + "classRooms",this.getOptions() );
   }

   saveClassRoom(classRoom: ClassRoom): Observable<ClassRoom> {
     return this.http.post<ClassRoom>(this.baseUrl + "classRooms", classRoom,this.getOptions());
   }


   updateClassRoom(classRoom: ClassRoom): Observable<ClassRoom> {
    return this.http.put<ClassRoom>(`${this.baseUrl}classRooms/${classRoom._id}`, classRoom, this.getOptions());
  }

  deleteClassRoom(id: string): Observable<ClassRoom> {
    return this.http.delete<ClassRoom>(`${this.baseUrl}classRooms/${id}`,this.getOptions());
  }

  authenticate(user: string, pass: string, flag: string = "admin"): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + "login",{
      name: user, password: pass, flag
    }).pipe(map(response =>{
      //this.auth_token = response.success ? response.token : null;
      this.auth_token = "test";
      return response.success;
    }));
  }



  private getOptions() {
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.auth_token}>`
      })
    }
  }

  // private getOptionsRemote() {
  //   return {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     })
  //   }
  // }


   //  saveClassRoomRemote( classRoomRemote: ClassRoomRemote) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'accept': '*/*',
  //       'Authorization': 'Basic ' + btoa('145c812655bc31bdf9424f77Copy:2f0fc45c4c16727e1ebc3ff202fb18d7108b88e6Copy')
  //     })
  //   };
  //    this.http.post<ClassRoomRemote>(this.thirdPartyUrl, classRoomRemote,httpOptions).subscribe( data => {
  //     console.log("returned data"+data);
  //   }, err => { console.log("returned error"+err)});
  //  }

  //  getClassRoomsRemote() { //: Observable<ClassRoomRemote[]>
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Authorization': 'Basic ' + btoa('a9cf3977554bcd3b21738eaf:3a580545df7e4d25cb216772f406eead40d92b')
  //     })
  //   };
  //    this.http.get<any>(this.thirdPartyUrl,httpOptions).subscribe( data => {
  //     console.log("stripped only class rooms info"+data);
  //   }, err => { console.log("returned error"+err)});
  //  }

  // authenticateRemote()  { //Observable<boolean>
  //   console.log("authenticateRemote");
  //   const data = {"api_public_key": '145c812655bc31bdf9424f77', "api_private_key": '2f0fc45c4c16727e1ebc3ff202fb18d7108b88e6'};
  //   this.http.post<any>(this.thirdPartyUrl + "get-api-token", data, this.getOptionsRemote()).subscribe(response =>{
  //     this.auth_token_remote = response.success ? response.token : null;
  //     console.log("token"+this.auth_token_remote);
  //   });
  // }


}

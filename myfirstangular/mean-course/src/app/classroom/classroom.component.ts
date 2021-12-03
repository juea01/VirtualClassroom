import {Component, ViewChild, ElementRef} from "@angular/core";
import {Socket} from "ngx-socket-io";
import Peer from 'peerjs';
import { Router, ActivatedRoute } from "@angular/router";

import { HelperService } from "../model/helper.service";
import { ClassRoomRepository } from "../model/classRoom.repository";
import { Message } from "../model/message.model";

const PROTOCOL = "http";
const PORT = 3500;


@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent {

  private peer: Peer;
  private baseUrl: string;
  private roomId: string;
  public handsUp: boolean;
  public hasMessage: boolean;


  @ViewChild('chat_message')
  chat_message: ElementRef;

  constructor(private socket: Socket, private helperService: HelperService, private route: Router, private activatedRoute: ActivatedRoute, private repository: ClassRoomRepository) {
    this.baseUrl = `${location.hostname}`;
    this.peer = new Peer(undefined, {
      path: "/peerjs",
      host: this.baseUrl,
      port: 3000
    });
    this.roomId = activatedRoute.snapshot.params["id"];
    this.handsUp = false;
    this.hasMessage = false;
  }

  ngAfterViewInit() {
    this.repository.getUpdatedMessage().subscribe((data) => {
      if(data.hasMessage) {
        console.log("Incoming messages"+data.message);
        this.repository.addMessage(data);
      } else {
        console.log("for hands up");
        if(data.handsUp) {
          let element =document.getElementById(data.messagerName).firstElementChild.setAttribute("style","display:block");
        } else {
          let element =document.getElementById(data.messagerName).firstElementChild.setAttribute("style","display:none");
        }
      }

    });
  }

  getMessages():Message[] {
    return this.repository.getMessages();
  }

  toogleHandsUp(){
    this.handsUp = !this.handsUp;
    if(this.handsUp) {
      let element =document.getElementById(this.helperService.getSignedInUser()).firstElementChild.setAttribute("style","display:block");
    } else {
      let element =document.getElementById(this.helperService.getSignedInUser()).firstElementChild.setAttribute("style","display:none");
    }

    let messager = this.helperService.getSignedInUser();
    this.socket.emit("messages", this.roomId, messager,null,null,this.handsUp,this.hasMessage);
  }

  ngAfterContentInit() {
    let myVideoStream;
    let userId = 1;
const teacherVideoWrapper = document.getElementById("teacher-video-wrapper");
const studentVideoWrapper = document.getElementById("student-video-wrapper");


navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
})
.then((stream) => {
    myVideoStream = stream;

    // this is creating video for current user
    const myVideo = createVideo(this.isTeacher(this.helperService.getSignInMode()),true);
    const videoWrapper = createVideoWrapper(this.helperService.getSignedInUser());
    addVideoStream(myVideo, videoWrapper, stream, this.helperService.getSignInMode());

    this.peer.on("call", (call)=>{
      const userId = call.metadata.userId;
      const signInMode = call.metadata.signInMode;
      call.answer(stream);

      const video = createVideo(this.isTeacher(signInMode),false);
      const videoWrapper = createVideoWrapper(userId);
      console.log("Video created for existing user to display in current user page");

      call.on("stream", (userVideoStream) => {
        console.log("Stream from call.on");
        addVideoStream(video, videoWrapper, userVideoStream, signInMode);
      });
    });

    this.socket.on("user-connected", (peerId, userName, signInMode) => {
      console.log(` peer id ${peerId} joined`)
      setTimeout(connectToNewUser,3000,peerId,stream,userName, signInMode);
      //connectToNewUser(peerId, stream, signInMode);
    })
});


const connectToNewUser = (peerId, stream, userName, signInMode) => {
const call = this.peer.call(peerId,stream,{metadata: {userId: this.helperService.getSignedInUser(), signInMode: this.helperService.getSignInMode()}});

const video = createVideo(this.isTeacher(signInMode),false);
const videoWrapper = createVideoWrapper(userName);

console.log("After creating video element in connectToNewUser ");
call.on("stream", (userVideoStream)=>{
  // this media stream is the media stream of the remote server
  console.log("Stream from call.on in connectToNewUser");
  addVideoStream(video, videoWrapper, userVideoStream,signInMode);
});

};

this.peer.on("open", (peerId) => {
  console.log(`User Name ${this.helperService.getSignedInUser()} and peer id ${peerId}`);
  this.socket.emit("join-room", this.roomId, peerId, this.helperService.getSignedInUser(), this.helperService.getSignInMode());
});

const addVideoStream = (video, videoWrapper, stream, signInMode) => {
  video.srcObject = stream;
  videoWrapper.append(video);



  if(this.isTeacher(signInMode)) {
    console.log("appending to video grid 1");
    teacherVideoWrapper.append(videoWrapper);
  } else {
   console.log("appending to video grid 2");
   let emptySpace = document.createTextNode("\u00A0");
   studentVideoWrapper.append(videoWrapper);
   studentVideoWrapper.append(emptySpace);
  }

  video.addEventListener("loadedmetadata", () => {
     video.play();
  });
};

const createVideo = (isTeacher, isMuted)=> {

  const video = document.createElement("video");

  const width = document.createAttribute("width");
  const height = document.createAttribute("height");
  if (isTeacher) {
    width.value = "350px";
    height.value = "350px";
  } else {
    width.value = "150px";
    height.value = "150px";
  }
  video.setAttributeNode(width);
  video.setAttributeNode(height);

  if (isMuted) {
    video.muted = true;
  }

  return video;
};

const createVideoWrapper = (userName)=> {
  const videoWrapper = document.createElement("div");
  const id = document.createAttribute("id");
  id.value = userName;
  videoWrapper.setAttributeNode(id);

  const handsUp = document.createElement("span");
  handsUp.innerHTML = "Hands Up";
  handsUp.setAttribute("style","display: none");

  videoWrapper.append(handsUp);
  return videoWrapper;
};





  }

  /**
   * Send message to other interested party for this room.
   * Here message lenght is used for creating message id as messages are not stored in db and messages from one room is not
   * related to another room.
   * @param msg
   */
  sendMessage(msg: string){
    console.log("Emitting chat messages");
    this.hasMessage = true;
    let messageId = this.repository.getMessageLength()+1;
    let messager = this.helperService.getSignedInUser();
    msg = msg.replace(/[\r\n]+/gm,"");
    this.socket.emit("messages", this.roomId, messager,messageId,msg,this.handsUp,this.hasMessage);
    let message: Message;
    message = new Message(messageId,messager,msg,this.handsUp,this.hasMessage);
    this.repository.addMessage(message);
    this.chat_message.nativeElement.value = '';
    this.hasMessage = false;

  }

  isTeacher(signInMode: string):boolean{
    if (signInMode.includes("teacher")) {
      return true;
    } else {
      return false;
    }
  }



}

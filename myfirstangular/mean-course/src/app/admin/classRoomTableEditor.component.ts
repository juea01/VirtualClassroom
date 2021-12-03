import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormArray, FormControl, NgForm, FormGroup } from "@angular/forms";
import { ClassRoom } from "../model/classRoom.model";
import { ClassRoomRepository } from "../model/classRoom.repository";
import { TimeTable } from "../model/timeTable.model";

@Component({
  templateUrl: "classRoomTableEditor.component.html",
  styleUrls: ["classRoomTableEditor.component.css"]
})
export class ClassRoomTableEditorComponent {

  editing: boolean = false;
  classRoom: ClassRoom = new ClassRoom(new TimeTable());

  //TODO: whenever addDays button is click save method is also called and thefore navigate back to previous page. Need to fix
  // but cause is currently unclear.
  hasPressedAddDay = false;
  days=new FormArray([]);

  constructor(private repository: ClassRoomRepository, private router: Router, private activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(this.classRoom, this.repository.getClassRoom(activeRoute.snapshot.params["id"]));
      for (const day of this.repository.getClassRoom(activeRoute.snapshot.params["id"]).timeTable.numberOfDaysAWeek) {
        this.days.push(new FormControl(day));
      }
    }
  }


  addDays() {
    this.hasPressedAddDay = true;
    this.days.push(new FormControl(''));
  }

  removeDays(index: number) {
    this.days.removeAt(index);
  }

  save(form: NgForm) {
    if(!this.hasPressedAddDay) {

      this.classRoom.timeTable.numberOfDaysAWeek  = new Array<string>();
      for (const day of this.days.controls) {
        this.classRoom.timeTable.numberOfDaysAWeek.push(day.value);
      }

      this.repository.saveClassRoom(this.classRoom);
      this.router.navigateByUrl("/admin/main/classRooms");
    }
    this.hasPressedAddDay = false;
  }


}

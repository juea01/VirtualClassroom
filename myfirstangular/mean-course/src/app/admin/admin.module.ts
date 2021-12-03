import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";



import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { ClassRoomTableComponent } from "./classRoomTable.component";
import { ClassRoomTableEditorComponent } from "./classRoomTableEditor.component";
import { StudentClassRoomTableComponent } from "./studentClassRoomTable.component";
import { AuthGuard } from "./auth.guard";

let routing = RouterModule.forChild([
  {path: "auth", component: AuthComponent},
  {
     path: "main", component: AdminComponent, canActivate: [AuthGuard],
     children: [
      {path: "classRooms/:mode/:id", component: ClassRoomTableEditorComponent},
      {path: "classRooms/:mode", component: ClassRoomTableEditorComponent},
      {path: "classRooms", component: ClassRoomTableComponent},
      {path: "studentClassRooms", component: StudentClassRoomTableComponent},
      {path: "**", redirectTo: "classRooms"}
     ]

  },
  {path: "**", redirectTo: "auth"}
]);

@NgModule({
 imports: [CommonModule, FormsModule, ReactiveFormsModule, routing],
 providers: [AuthGuard],
 declarations: [AuthComponent, AdminComponent, ClassRoomTableComponent, ClassRoomTableEditorComponent, StudentClassRoomTableComponent]
})
export class AdminModule {}

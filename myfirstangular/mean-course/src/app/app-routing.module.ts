import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { SigninComponent } from "./signin/signin.component";
import { AuthComponent } from "./signin/auth.component";
import { BodyComponent } from "./body/body.component";
import {SubjectComponent} from './student/student.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { path: "signin/:mode", component: AuthComponent },
  { path: "home", component: BodyComponent },
  { path: "student", component: SubjectComponent},
  {path: "teacher", component: TeacherComponent},
  {path: "classroom/:id", component: ClassroomComponent},
  {path: "classroom", component: ClassroomComponent},
  { path: "register/:mode", component: RegistrationComponent },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

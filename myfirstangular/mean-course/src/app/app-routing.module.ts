import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from "./signin/signin.component";
import { BodyComponent } from "./body/body.component";

const routes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "home", component: BodyComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

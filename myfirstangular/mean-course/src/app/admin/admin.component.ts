import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: "admin.component.html",
  styleUrls: ["admin.component.css"]
})
export class AdminComponent {

  constructor(private router: Router) {}

  logout() {
    this.router.navigateByUrl("/");
  }
}

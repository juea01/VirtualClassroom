import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../model/auth.service";
import { HelperService } from "../model/helper.service";

@Component({
  templateUrl: "auth.component.html",
  styleUrls: ["auth.component.css"]
})
export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;
  public signInMode: string;

  constructor(private router: Router, private auth: AuthService, private helperService: HelperService, private activeRoute: ActivatedRoute) {
    this.signInMode = this.activeRoute.snapshot.params["mode"]
  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.username,this.password, this.signInMode)
        .subscribe(response => {
          if (response) {
            this.helperService.setSignedInUser(this.username);
            this.helperService.setSignInMode(this.signInMode);

            if(this.signInMode === "student") {
              this.router.navigateByUrl("student");
            } else {
              this.router.navigateByUrl("teacher")
            }

          }
          this.errorMessage = "Authentication Failed";
        })

    } else {
      this.errorMessage = "Form Data Invalid";
    }
  }

}

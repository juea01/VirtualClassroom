import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


enum Days {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}

@Injectable()
export class HelperService {

  private readonly acceptAdminState = "accepted";
  public readonly defaultAdminState = "pending";
  public readonly rejectAdminState = "rejected";

  private static readonly Days = Days;

  private signedInUser: string;
  private signInMode: string;


  constructor() {

  }

 getSignedInUser(): string {
  return this.signedInUser;
 }

  setSignedInUser(signedInUser: string) {
    this.signedInUser = signedInUser;
  }

  getSignInMode(): string {
    return this.signInMode;
  }

  setSignInMode(mode: string) {
    this.signInMode = mode;
  }

  getAcceptAdminState(): string {
    return this.acceptAdminState;
  }

  getRejectAdminState(): string {
    return this.rejectAdminState;
  }

  getDefaultAdminState(): string {
    return this.defaultAdminState;
  }

  getDay(day: string): number {
    return Days[day];
  }

}

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AuthService {
  constructor(private datasource: RestDataSource) {

  }

  authenticate(username: string, password: string, flag: string = "admin"): Observable<boolean> {
    //return this.datasource.authenticateRemote();
    return this.datasource.authenticate(username,password, flag);
  }

  get authenticated(): boolean {
    return this.datasource.auth_token != null;
  }

  clear() {
    this.datasource.auth_token = null;
  }
}

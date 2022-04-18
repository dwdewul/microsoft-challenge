import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data.model';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  private _userData: UserData = new UserData();

  constructor() {}

  public set userData(userData: UserData) {
    this._userData.firstName = userData.firstName;
    this._userData.email = userData.email;
  }

  public get userData(): UserData {
    return this._userData;
  }
}
